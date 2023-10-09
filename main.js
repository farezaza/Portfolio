window.onload= pageLoad;
function pageLoad()
{
    var port = document.getElementById("portfolio");
    port.onclick = portLink;

    var work = document.getElementById("works");
    work.onclick = workLink;

    var as4 = document.getElementById("chicken");
    as4.onclick = chickenlink;

    var as5 = document.getElementById("blog");
    as5.onclick = blogLink;

    var as6 = document.getElementById("register");
    as6.onclick = registerLink;

    var as7 = document.getElementById("squaregame");
    as7.onclick = squareLink;

}
function portLink(){
    location.href = "/index.html";
}
function workLink(){
    location.href = "/myworks.html";
}
function chickenlink(){
    location.href = "/works/chicken/recipe.html";
}
function blogLink(){
    location.href = "/works/blogger/index.html";
}
function registerLink(){
    location.href = "/works/login/register.html";
}
function squareLink(){
    location.href = "/works/squaregame/index.html";
}