 const Popup = document.querySelector("#popup")
 const boxCon = document.querySelector(".box-con")
 const Skip = document.querySelector("#skip")
 const userName1 = document.querySelector(".user__name")
 const userNickname = document.querySelector(".user__nickname")
 const submitEl = document.querySelector("#submit-el")
 const Username = document.querySelector("#username")
 const Nickname = document.querySelector("#nickname")
const Settings = document.querySelector(".Settings") 

 document.addEventListener("DOMContentLoaded", getNames);
document.addEventListener("DOMContentLoaded", signlocal)

window.addEventListener("load",function(){
    this.setTimeout(function() {
        boxCon.classList.add("show-popup")
     }, 2000)
})
window.onclick = function(event) {
    if (event.target == boxCon) {
        boxCon.classList.remove("show-popup")
    }
  }


  Skip.addEventListener("click",function(){
    boxCon.classList.remove("show-popup")
  })
  submitEl.addEventListener("click",function(){
    boxCon.classList.remove("show-popup");
    userName = Nickname;
    userName1.innerHTML = Username.value
    userNickname.innerHTML = Nickname.value
    saveUserName(Username.value)
    saveUserNickName(Nickname.value)
    
    localStorage.setItem("sign-in","yes")
  })
  Settings.addEventListener("click",function(){
    boxCon.style.display= "flex";
  })
   
  function saveUserName(name) {
    let Name;
    if (localStorage.getItem("Name") === null) {
        Name = "";
    } else {
        Name = JSON.parse(localStorage.getItem("Name"));
    }

    Name = name;

    localStorage.setItem("Name", JSON.stringify(Name));
}
  function saveUserNickName(nickname) {
    let Nickname;
    if (localStorage.getItem("Nickname") === null) {
        Nickname = "";
    } else {
        Nickname = JSON.parse(localStorage.getItem("Nickname"));
    }

    Nickname = nickname;

    localStorage.setItem("Nickname", JSON.stringify(nickname));
}
function getNames() {

    let Name;
    if (localStorage.getItem("Name") === null) {
        Name = "";
    } else {
        Name = JSON.parse(localStorage.getItem("Name"));
    }

    let Nickname;
    if (localStorage.getItem("Nickname") === null) {
        Nickname = "";
    } else {
        Nickname = JSON.parse(localStorage.getItem("Nickname"));
    }
    userName1.innerHTML = Name;
    userNickname.innerHTML = Nickname;
    userName = Nickname;
}
    function signlocal() {
      if (localStorage.getItem("sign-in") === "yes") {
        Popup.style.display = "none";
      }
    }