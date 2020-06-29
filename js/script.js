
const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/florin-popcom/codepen/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}


window.addEventListener("load",function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(() => {
        document.querySelector(".preloader").style.display="none";
    }, 1000);
})

const nav=document.querySelector(".nav"),
navlist=nav.querySelectorAll("li"),
allsection=document.querySelectorAll(".section"),
totalsection=allsection.length,
totalnavlist=navlist.length;
for(let i=0;i<totalnavlist;i++){
    const a=navlist[i].querySelector("a");
    a.addEventListener("click",function(){
        //remove back section class
        for(let i=0;i<totalsection;i++){
            allsection[i].classList.remove("back-section");
        }

        for(let j=0;j<totalnavlist;j++){
            if(navlist[j].querySelector("a").classList.contains("active")){
                //add back section class
                allsection[j].classList.add("back-section");
  
            }
            navlist[j].querySelector("a").classList.remove("active");
            
        }
        this.classList.add("active");
        showSection(this);

        if(window.innerWidth<1200){
            asideSectionTogglerbtn();
        }

    })
}

function showSection(element){

    for(let i=0;i<totalsection;i++){
        allsection[i].classList.remove("active");
    }
    const target=element.getAttribute('href').split("#")[1];
    document.querySelector("#"+target).classList.add("active");
}

const navtogglerbtn=document.querySelector(".nav-toggler"),
aside=document.querySelector(".aside");
navtogglerbtn.addEventListener("click",()=>{
    asideSectionTogglerbtn();
})

function asideSectionTogglerbtn(){
    aside.classList.toggle("open");
    navtogglerbtn.classList.toggle("open");
    for(let i=0;i<totalsection;i++){
        allsection[i].classList.toggle("open");
    }
}