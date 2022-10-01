var navBar = document.querySelector(".navbars");
var maker = document.querySelector(".maker");
var wrap = document.querySelector(".wrap-div");
var favicon = document.querySelector(".favicon");
var gotopCon = document.querySelector("#gotop_con");
  navBar.addEventListener("click", function(){
    var navContent = document.querySelector("#nav");
    navContent.classList.toggle("activeNav");
    navBar.classList.toggle("activeBar");
  })
  gotopCon.addEventListener("click",function(){
    var navContent = document.querySelector("#nav");
    navContent.classList.remove("activeNav");
    navBar.classList.remove("activeBar")
  })
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll("#chrome");
    links.forEach(link => {
      const location = link.getAttribute('href');
      link.addEventListener('click', () => chrome.tabs.create({active: true, url: "popup.html"}));
    });
  });

  ulEl.addEventListener("click", function(e){
    const item = e.target;
    if (item.classList.contains("view")) {
            const link = item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].innerText;
            alert(link)
    }
        })
