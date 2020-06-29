

const nav=document.querySelector(".nav"),
navlist=nav.querySelectorAll("li"),
totalnavlist=navlist.length;
for(let i=0;i<totalnavlist;i++){
    const a=navlist[i].querySelector("a");
    a.addEventListener("click",function(){
        for(let j=0;j<totalnavlist;j++){
            navlist[j].querySelector("a").classList.remove("active");
            console.log("remove");
        }
        this.classList.add("active");
    })
}