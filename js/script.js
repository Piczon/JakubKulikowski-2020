const navbar = document.querySelector("#navbar-desktop");
const navbarRight = document.querySelector("#bottom-side-bar");


window.onscroll = function() {
    
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.style.backgroundColor = "#232323";
        navbar.style.boxShadow = "0px 0px 11px 0px rgba(0,0,0,0.75)";
        navbarRight.style.width = "0%";
    }
    else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
        navbarRight.style.width = "100%";
    }
}
