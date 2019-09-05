const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
let ctaimg =document.getElementById("cta-img");
ctaimg.setAttribute('src',siteContent["cta"]["img-src"]);
let midimg =document.getElementById("middle-img");
midimg.setAttribute('src','img/mid-page-accent.jpg');
let a0 =  document.getElementsByTagName('a')[0];
a0.textContent = siteContent["nav"]["nav-item-1"];
let a1 =  document.getElementsByTagName('a')[1];
a1.textContent = siteContent["nav"]["nav-item-2"];
let a2 =  document.getElementsByTagName('a')[2];
a2.textContent = siteContent["nav"]["nav-item-3"];
let a3 =  document.getElementsByTagName('a')[3];
a3.textContent = siteContent["nav"]["nav-item-4"];
let a4 =  document.getElementsByTagName('a')[4];
a4.textContent = siteContent["nav"]["nav-item-5"];
let a5 =  document.getElementsByTagName('a')[5];
a5.textContent = siteContent["nav"]["nav-item-6"];

var myNodelist = document.querySelectorAll("a");
var i;
for (i = 0; i < myNodelist.length; i++) {
  myNodelist[i].style.backgroundColor = "red";
}
headline = document.querySelector('h1');
headline.textContent = siteContent["cta"]["h1"];
button1 = document.querySelector('button');
button1.textContent = siteContent["cta"]["button"];
h4nodetop = document.querySelectorAll('.top-content .text-content h4');
h4nodetop[0].textContent = siteContent['main-content']["features-h4"];
h4nodetop[1].textContent = siteContent['main-content']["about-h4"];
contentnodetop = document.querySelectorAll('.top-content .text-content p')
contentnodetop[0].textContent = siteContent['main-content']["features-content"];
contentnodetop[1].textContent = siteContent['main-content']["about-content"];
h4nodebot = document.querySelectorAll('.bottom-content .text-content h4');
h4nodebot[0].textContent = siteContent['main-content']["services-h4"];
h4nodebot[1].textContent = siteContent['main-content']["product-h4"];
h4nodebot[2].textContent = siteContent['main-content']["vision-h4"];
contentnodebot = document.querySelectorAll('.bottom-content .text-content p')
contentnodebot[0].textContent = siteContent['main-content']["services-content"];
contentnodebot[1].textContent = siteContent['main-content']["product-content"];
contentnodebot[2].textContent = siteContent['main-content']["vision-content"];
h4contact = document.querySelector('.contact h4');
h4contact.textContent = siteContent['contact']["contact-h4"];
contactnode = document.querySelectorAll('.contact p');
contactnode[0].textContent = siteContent['contact']["address"];
contactnode[1].textContent = siteContent['contact']["phone"];
contactnode[2].textContent = siteContent['contact']["email"];
footervar = document.querySelector('footer p');
footervar.textContent = siteContent['footer']["copyright"];
const navitems = document.querySelectorAll('header nav a');
console.log(navitems);
navitems.forEach((element) => { element.style.color = 'green';});
let navparent = document.querySelector('header nav');
console.log(navparent);
let navchild1 = document.createElement('a');
navchild1.text ='Child1';
navchild1.href='#';
navchild1.style.color='green';
console.log(navchild1);
navparent.appendChild(navchild1);
let navchild2 = document.createElement('a');
navchild2.text ='Child2';
navchild2.href='#';
navchild2.style.color='green';
navparent.prepend(navchild2);

//Stretch changing styles
let myataglist = document.querySelectorAll("a");
console.log(myataglist);
navtest = Object.values(siteContent.nav);
console.log(navtest);
for (i = 0; i < myataglist.length; i++) {
  myataglist[i].style.backgroundColor = "red";
  // myataglist[i].textContent = navtest[i];
}
//Stretch Button
let newbutton = document.createElement('button');
newbutton.textContent = 'Click me';
newbutton.color = 'blue';
function clickMe() {
  event.target.textContent= 'You Clicked ME!!!';
 }
newbutton.addEventListener("click", clickMe);

footerNode = document.querySelector('footer');
footerNode.prepend(newbutton);

//Stretch addEventListener

function changeH1() {
  let dx=document.getElementsByTagName("h1") ;
  
  dx[0].textContent = "Hello DOM";
 }
console.log(button1);
button1.addEventListener("click",changeH1);


//  
//Stretch addEventListner
//  document.body.addEventListener("click", event => {
//   if (event.target.nodeName == "BUTTON") {
//     event.target.textContent= 'You Clicked ME!!!';
//   }
// });