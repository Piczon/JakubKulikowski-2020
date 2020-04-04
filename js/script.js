const navbar = document.querySelector("#navbar-desktop");
const navbarRight = document.querySelector("#bottom-side-bar");

const expLeft = document.querySelector(".first-left");
const expRight = document.querySelector(".first-right");

const bioLeft = document.querySelector(".third-left");
const bioRight = document.querySelector(".third-right");

const projectLeft = document.querySelector(".second-left");
const projectRight = document.querySelector(".second-right");

let bounding = projectLeft.getBoundingClientRect();

console.log(bounding);

window.onscroll = function() {
    
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.style.backgroundColor = "#232323";
        navbar.style.boxShadow = "0px 0px 11px 0px rgba(0,0,0,0.75)";
        navbarRight.style.width = "0%";

        if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            expLeft.style.width = "51%";
            expRight.style.width = "51%";

            if(document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
                bioLeft.style.width = "51%";
                bioRight.style.width = "51%";

                if(document.body.scrollTop > 2300 || document.documentElement.scrollTop > 2300) {
                    projectLeft.style.width = "51%";
                    projectRight.style.width = "51%";
                }
                else {
                    projectLeft.style.width = "0";
                    projectRight.style.width = "0";
                }
            }
            else {
                bioLeft.style.width = "0";
                bioRight.style.width = "0";
            }
        }
        else {
            expLeft.style.width = "0";
            expRight.style.width = "0";
        }
        
    }

    else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
        navbarRight.style.width = "100%";
    }
    
}
