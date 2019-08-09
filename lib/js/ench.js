let adreel = document.getElementById('adreel');
let password = document.getElementById('passwordInput');
let ivpassword = document.getElementById('invalid');

function hide(){
let hide = document.querySelector(".navbar");
    if(hide.style.visibility != "visible"){
        hide.style.visibility =  "visible";
    }else{
        hide.style.visibility =  "hidden";
    }
    console.log(hide.style.visibility)
}

