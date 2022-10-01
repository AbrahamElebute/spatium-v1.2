    if (localStorage.getItem("Nickname") === null) {
        Nickname = "";
    } else {
        Nickname = JSON.parse(localStorage.getItem("Nickname"));
    }
    userName = Nickname;
 
var userName = Nickname;
var welcomePhrase = [
  `Hello, ${userName}!`,
  `Howdy, ${userName}!`,
  `Hey, ${userName}, How is it going?`,
  `What’s kicking, ${userName}`,
  `${userName}! Tell me what’s new!`,
  `Hey there, ${userName}! Wassup?`,
  `‘Ello, ${userName}. Wassup?`,
  `Hi, ${userName}! What is going on?`,
  `I come in peace! ${userName}`,
  `Ahoy, ${userName}!`,
  `Hiya! Hi!`,
  `Hello, governor!`,
  `What’s cracking, ${userName}?`,
  `Hiiiii, ${userName}!`,
  `I am Batman. Who are you, gorgeous?`,
  `How are you ${userName}?`,
  `Yo! Wassup ${userName}?`,
    `Whaddup ${userName}?`,
  `Greetings ${userName}!`,
  `Howdy, ${userName}! How are ya?`
]
var wrapperPhrase = document.querySelector(".wrapper-phrase")
var heroImg = document.querySelector("#hero-img");
var heroInput = document.querySelector(".hero-input");
var heroInputdiv = document.querySelector(".heroInputdiv");
var heroInputRemove = document.querySelector(".heroInputRemove");
var heroInputdiv = document.querySelector(".heroInputdiv");
const wrapper = document.querySelector(".input-wrapper");
const profileImg = document.querySelector("#profile-img");
const subNav = document.querySelector(".subnav");
textInput = document.querySelector("input[type='text']");
  heroCreatedImg = document.createElement("img")
  heroCreatedImg.src= "https://source.unsplash.com/random/?wallpapers"
  heroCreatedImg.alt= "    please connect your device to the internet..."
  heroCreatedImg.className= "hero-created-img"
  heroImg.appendChild(heroCreatedImg)

  heroInput.addEventListener("click",function(){
    heroInputdiv.classList.add("show_heroInputdiv")
  })
  heroInputRemove.addEventListener("click",function(){
    heroInputdiv.classList.remove("show_heroInputdiv")
  })        
textInput.addEventListener("keyup", event => {
  wrapper.setAttribute("data-text", event.target.value);
});
  window.onclick = function(event) {
    if (event.target == heroInputdiv) {
      heroInputdiv.classList.remove("show_heroInputdiv")
    }
  }
  window.addEventListener("load",function(){
    var random = getRadomNumbers()
    for (let i = 0; i < welcomePhrase.length; i++) {
      var element = welcomePhrase[random];
    }
    wrapperPhrase.innerHTML =  element

  })
  function getRadomNumbers() {
    return  Math.floor(Math.random()* welcomePhrase.length)
  }
// 
profileImg.addEventListener("click",function(){
  subNav.classList.toggle("subnav_active")
})
// 