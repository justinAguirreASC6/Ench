let adreel = document.getElementById('adreel');
let password = document.getElementById('passwordInput');
let ivpassword = document.getElementById('invalid');
let hide1 = document.getElementsByClassName('.navbar');
let hide2 = document.getElementsByClassName('.sidenav');
let cmt = document.getElementById('cmtinput');



function hide(){
let hide = document.querySelector(".navbar");
    if(hide.style.visibility != "visible"){
        hide.style.visibility =  "visible";
    }
    else{
        hide.style.visibility =  "hidden";
    }
    console.log(hide.style.visibility)
}

function hideside(){
    let hide = document.querySelector(".sidenav");
        if(hide.style.visibility != "visible"){
            hide.style.visibility =  "visible";
        }else{
            hide.style.visibility =  "hidden";
        }
        console.log(hide.style.visibility);
    }

let cmtmsgs = document.getElementById("cmtmsgs");

function createmesg(){
    usercomment1 = document.createElement("div");
    usercomment1.className = "usercomment1";
    usercomment1.innerHTML = `
        <img class="person1" src="assets/jpg/person2.jpg" width="30" height="30"> 
        <div class="usern"> <strong>Jane Doe</strong></div> 
        <div class="cmt">${cmt.value}</div> 
        <img class="like1" src="assets/NavbarIcons/e-commerce-like-heart.svg" width="10px">
        ` 
        cmtmsgs.appendChild(usercomment1);
        cmt.value = "";
}

