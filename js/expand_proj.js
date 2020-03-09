


// Nav animation

var nav1 = document.getElementById("nav1");
var door = document.getElementById("door");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var nav4 = document.getElementById("nav4");
var nav5 = document.getElementById("nav5");
var nav6 = document.getElementById("nav6");
var landing = document.getElementById("landing");
var overlay = document.getElementById("overlay");

nav1.addEventListener("click", function nav_ani()
{

    nav2.style.transform = "translate(65px,70px) rotate(20deg)"; // about
    
    nav2.style.transition = ".2s";
    nav2.style.border = 'solid 1px';

    nav3.style.transform = "translateX(120px) rotate(-20deg)"; //projects
    nav3.style.transition = ".2s";
    nav3.style.border = 'solid 1px';
    
    nav4.style.transform = "translate(-65px,70px) rotate(-20deg)"; // skills
    nav4.style.transition = ".2s";
    nav4.style.border = 'solid 1px';

    nav5.style.transform = "translateX(-120px) rotate(20deg)"; // maps
    nav5.style.transition = ".2s";
    nav5.style.border = 'solid 1px';

    nav6.style.transform = "translate(30px,100px)"; // maps
    nav6.style.transition = ".3s";
    nav2.style.border = 'solid 1px';

    landing.style.background="linear-gradient(lightblue, white)";
    landing.style.transition = ".5s";

    overlay.style.opacity="0%";
    overlay.style.transition="1s";
});

nav6.addEventListener("click", function nav_retract()
{

    nav2.style.transform = "rotate(0deg)";
    nav2.style.transformOrigin = "bottom";
    nav2.style.transition = ".2s";
    nav2.style.border = 'none';
    

    nav3.style.transform = "rotate(0deg)";
    nav3.style.transformOrigin = "bottom";
    nav3.style.transition = ".2s";
    nav3.style.border = 'none';

    nav4.style.transform = "rotate(0deg)";
    nav4.style.transformOrigin = "bottom";
    nav4.style.transition = ".2s";
    nav4.style.border = 'none';

    nav5.style.transform = "rotate(0deg)";
    nav5.style.transformOrigin = "bottom";
    nav5.style.transition = ".2s";
    nav5.style.border = 'none';

    nav6.style.transform = "rotate(0deg)";
    nav6.style.transformOrigin = "bottom";
    nav6.style.transition = ".2s";
    nav6.style.border = 'none';

    overlay.style.opacity="100%";
    overlay.style.transition="1s";
});

// projects hiders


var proj1= document.getElementById("proj1");
var proj2 = document.getElementById("proj2");
var proj3 = document.getElementById("proj3");
var proj1_but = document.getElementById("P1_button");
var proj2_but = document.getElementById("P2_button");
var proj3_but = document.getElementById("P3_button");

proj1_but.addEventListener("click", function expandP1()
{
    proj1.style.display = "block";
    proj1_but.style.display = "none";
});

proj2_but.addEventListener("click", function expandP2()
{
    proj2.style.display = "block";
    proj2_but.style.display = "none";
});

proj3_but.addEventListener("click", function expandP3()
{
    proj3.style.display = "block";
    proj3_but.style.display = "none";
});

