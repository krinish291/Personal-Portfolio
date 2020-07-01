

function sendmail(){
    console.log("sendmail call");
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "radadiyakrinish1999@gmail.com",
        Password : "3D92F2858C197BC99873185F372F1C4B1217",
        To : 'radadiyakrinish1999@gmail.com',
        From : "radadiyakrinish29@gmail.com",
        Subject : "check mail",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}