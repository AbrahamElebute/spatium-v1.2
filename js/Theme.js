const Theme = document.getElementById("theme");
const isSelected = document.querySelector(".is-selected");
const colorOption = document.querySelector(".color-option");
const ThemeGroup = document.querySelector(".Theme-group");
var navBar = document.querySelector(".navbars");
const Color1 = document.querySelector(".color1");
document.addEventListener("DOMContentLoaded", getThemeMode);
document.addEventListener("DOMContentLoaded",function(){
    let root = document.documentElement;
    if(root.style.cssText === "--primary-color:#6800D0;"){
        Body.classList.remove("blend");
    }
    else if(root.style.cssText === ""){
        Body.classList.remove("blend");
    }
    else{
    Body.classList.add("blend");
    }
});

var navContent = document.querySelector("#nav");

navBar.addEventListener("click",function(){
    if(!navContent.classList.contains("activeNav")){
            ThemeGroup.classList.remove("Theme-group-active")

    }
})
Theme.addEventListener("click",function(){
    ThemeGroup.classList.toggle("Theme-group-active")
})


colorOption.addEventListener("click",function(){
    if(colorOption.classList.contains("color1")){
        document.body.classList.toggle('root');
    }
    if(colorOption.classList.contains("color2")){
        document.body.classList.toggle('blue');
    }
    else{
        isSelected.classList.add("is-selected")

    }
})
const Body  = document.body;

document.addEventListener('click', (e) => {
    var colorOption = e.target.closest('.color-option');
    if (!colorOption) return;
    
    // unselect currently selected color options
    document.querySelectorAll('.color-option').forEach(colorOption => colorOption.classList.remove('is-selected'));
    colorOption.classList.add('is-selected');
    
    const color = colorOption.dataset.color;
    let root = document.documentElement;
    root.style.setProperty('--primary-color', color);
    saveThemeMode(color)
    if(colorOption.classList.contains("color1")){
        Body.classList.remove("blend");
    }
    else{
    Body.classList.add("blend");
    }

  });
  function saveThemeMode(ThemeModeColor) {

    let ThemeMode;
    if (localStorage.getItem("ThemeMode") === null) {
        ThemeMode ="";
    } else {
        ThemeMode = JSON.parse(localStorage.getItem("ThemeMode"));
    }

    ThemeMode = ThemeModeColor;

    localStorage.setItem("ThemeMode", JSON.stringify(ThemeMode));
}
function getThemeMode() {

    let ThemeMode;
    if (localStorage.getItem("ThemeMode") === null) {
        ThemeMode ="";
    } else {
        ThemeMode = JSON.parse(localStorage.getItem("ThemeMode"));
    }
    let root = document.documentElement;
    root.style.setProperty('--primary-color', ThemeMode);
    if(root.style.cssText === "--primary-color:#6800D0;"){
        Body.classList.remove("blend");
    }
    else{
    Body.classList.add("blend");
    }
}

  