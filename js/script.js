const title = document.getElementById("title").innerHTML;
const projectName = document.getElementById("projectName");
const foto = document.getElementById("foto");
const intro = document.getElementById("intro");
const copyright = document.getElementById("copyright");


init();

function init() {
    projectName.innerHTML = title;
    foto.src = "../images/social/foto.jpg";
    intro.innerHTML = "<q>My name is Jhonatan Néry, I live in Curitiba-PR, Brazil.<br /><br />Here you can see most of my projects and know more about them, I hope you enjoy it.</q>";
    copyright.innerHTML = "2022 Jhonatan Néry - All rights reserved.";

}