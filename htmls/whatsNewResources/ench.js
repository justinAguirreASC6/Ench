
function hide(){
    let hide = document.querySelector(".navbar");
        if(hide.style.visibility != "visible"){
            hide.style.visibility =  "visible";
        }else{
            hide.style.visibility =  "hidden";
        }
        console.log(hide.style.visibility)
    }
    
    