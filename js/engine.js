let myLeads = [];
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const MyindexLeadsFromLocalStorage = JSON.parse( localStorage.getItem("MyIndexLeads") )
const tabBtn = document.getElementById("tab-btn")
const allTabBtn = document.getElementById("all-tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const openTab = document.getElementById("open-tab")
const Fillter = document.querySelectorAll("#fillter")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

document.addEventListener("DOMContentLoaded", function(){
  tray()
  open()
});

function tray(){
  trayNo.innerHTML= myLeads.length;
}
function open(){
 chrome.tabs.query({ currentWindow: true }, function (tabs) {
    openTab.innerHTML= tabs.length;
});
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.unshift(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
        tray()
    })
})
allTabBtn.addEventListener("click", function(){    
  chrome.tabs.query({ currentWindow: true }, function (tabs) {
    tabs.forEach(function (tab) {
           myLeads.unshift(tab.url)
           localStorage.setItem("myLeads", JSON.stringify(myLeads) )
           render(myLeads)
           tray()
    });
});
    })
function dateFunc() {
    return new Date().toLocaleString();
}




function render(leads) {

    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
      var pathArray = leads[i].split('/');
      var protocol = pathArray[0];
      var host = pathArray[2];
      // var url = protocol + '//' +`s2.googleusercontent.com/s2/favicons?domain=` + host;
      var url = protocol + '//' +`www.google.com/s2/favicons?domain_url=` + host+`&sz=128`;
        listItems += `
        <li class="li_ul">
        <div class="maker tick"></div>
        <div class="favicon">
          <img style="height: 40px; width: 40px;" src=${url} alt="default" class="favicon-img" >
        </div>
        <div class="wrap-div">
          <div class="date"> Date: ${dateFunc()}</div>
          <div class="wrap">
            <a href= ${leads[i]} target="_blank"
              title=${leads[i]} >${leads[i]}</a>
          </div>
        </div>

        <div id="container">
          <div id="menu-wrap">
            <input type="checkbox" class="toggler" />
            <div class="dots">
              <div></div>
            </div>
            <div class="menu">
              <ul>
                <li>
                  <div class="link" id="view">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 240 240">
                  <path d="M120 90a30 30 0 00-30 30 30 30 0 00 30 30 30 30 0 00 30-30 30 30 0 00-30-30"/>
                  <path d="M120 50C44 50 20 116 20 117v6S45 190 120 190s100-66 100-67v-6S195 50 120 50zm0 120a83 83 0 01-80-50c6-12 27-50 80-50 54 0 74 38 80 50-6 12-27 50-80 50" fill= var(--black)/>
                </svg>
                
                    <p>view</p>
                  </div>
                </li>
                <li>
                  <div class="link" id="like">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 240 240">
                  <path d="M40 210h10V80H40a20 20 0 00-20 20v90a20 20 0 00 20 20zM200 80h-70l11-34A20 20 0 00 122 20H120L70 74V210h110l40-86V100a20 20 0 00-20-20" fill= var(--black)/>
                </svg>
                    <p>Mark as favorite</p>
                  </div>
                </li>
                <li class="like">
                  <div class="link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z" fill= var(--black)/>
                  </svg>
                    <p>Quick delete</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </li>
        `
    }
    ulEl.innerHTML = listItems;
    // const img = document.querySelector(".favicon-img")
const images = document.querySelectorAll('img');

images.forEach(img => {
  img.addEventListener('error', function handleError() {
    const defaultImage =
      'asset/default.png';

    img.src = defaultImage;
    img.alt = 'default';
  });
});
}

 ulEl.addEventListener("click", function (e) {
  const item = e.target;
  if (item.classList.contains("tick")) {
          const link = item.parentElement;
          link.classList.toggle("marked-div")
  }
})
  
deleteBtn.addEventListener("dblclick", function() {
  localStorage.removeItem('myLeads')
  myLeads = []
  render(myLeads)
  tray()
})
const FactoryReset = document.querySelector("#Factory-reset") 

FactoryReset.addEventListener("dblclick", function() {
  localStorage.clear()
  myLeads = []
  render(myLeads)
  tray()
})
const View = document.querySelectorAll("#view")

View.forEach(View => {
  View.addEventListener('click', function handleClick(e) {
    const item = e.target;
    // if (item.classList.contains("favorite-btn")) {
          
    // }
    const toFav = item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[1];
    // console.dir(toFav)
    // const viewDiv = document.createElement("div");
    // viewDiv.textContent= toFav.innerText;
    // ulEl.appendChild(viewDiv);
    // console.log(viewDiv)
    const viewDiv1 = document.createElement("div");
    viewDiv1.className = "viewDiv1"
    const viewDiv = document.createElement("div");
    viewDiv.className = "viewdiv";
    const view2Div = document.createElement("div");
    const viewH1 = document.createElement("h1");
    viewH1.innerText = "😁 Your url‼"
    const viewH1A = document.createElement("a");
    viewH1A.href = toFav.innerText;
    viewH1A.target = "_blank";
    viewH1A.textContent= toFav.innerText;
    ulEl.appendChild(viewDiv1);
    viewDiv1.appendChild(viewDiv);
    viewDiv.appendChild(view2Div);
    view2Div.appendChild(viewH1);
    view2Div.appendChild(viewH1A);
    
    
    var ViewDiv1 = document.querySelector(".viewDiv1")
   window.onclick = function(event) {
  if (event.target == ViewDiv1) {
    viewDiv1.remove()
  }
}
  });
});
let MyIndexLeads = [];

const Like = document.querySelectorAll("#like")
Like.forEach(Like => {
  Like.addEventListener('click', function handleClick(e) {
    var item = e.target;
    var toLik = item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[0];
    var toLikFind = item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[1];
    toLik.classList.toggle("liked")
    let index =  myLeads.indexOf(toLikFind.innerText);
    MyIndexLeads.unshift(index)
    console.log(index)
    console.log(MyIndexLeads)
    localStorage.setItem("MyIndexLeads", JSON.stringify(MyIndexLeads) )
    
  });


});
// document.addEventListener("DOMContentLoaded",getLeadIndex)
// function getLeadIndex() {
//  let leadIndex = localStorage.getItem("MyIndexLeads");
//   for (let index = 0; index < myLeads.length; index++) {
//     for (let j = 0; j < leadIndex.length; j++) {
//       const element = array[j];
//     const elementJ = myLeads[j  ];
//     }
//   console.log(element)
//   console.log(elementJ)
    
//   }
// }
// Fillter.forEach(Fillter => {
//   Fillter.addEventListener('click', function handleClick(event) {
//     var liUl = document.getElementsByClassName("li_ul");
//     for(var i = 0; i < liUl.length; i++){
//       if(liUl[i] === true){
//         liUl.style.color = "blue";
//         console.log([i]);
//       }
//     }
//   });
// });