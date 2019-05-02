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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelector('nav');

let navA = document.querySelectorAll('a');

navA[0].textContent = siteContent['nav']["nav-item-1"];
navA[1].textContent = siteContent['nav']["nav-item-2"];
navA[2].textContent = siteContent['nav']["nav-item-3"];
navA[3].textContent = siteContent['nav']["nav-item-4"];
navA[4].textContent = siteContent['nav']["nav-item-5"];
navA[5].textContent = siteContent['nav']["nav-item-6"];

navA[0].style.color = 'green';
navA[1].style.color = 'green';
navA[2].style.color = 'green';
navA[3].style.color = 'green';
navA[4].style.color = 'green';
navA[5].style.color = 'green';

let home = document.createElement("a");
home.innerText = "Home"
home.href = '#';
home.style.color = 'green';
nav.prepend(home);

let youtube = document.createElement("a");
youtube.innerText = "Youtube"
youtube.href = 'http://www.youtube.com';
youtube.style.color = 'green';
nav.appendChild(youtube);



let h1 = document.querySelector('.cta h1');
h1.textContent = siteContent['cta']["h1"];

let button = document.querySelector('.cta button');
button.textContent = siteContent['cta']["button"];

const img = document.querySelector('.cta img');
img.setAttribute('src', siteContent['cta']["img-src"]);

const heading = document.querySelectorAll('div.text-content > h4');
heading[0].textContent = siteContent["main-content"]["features-h4"];
heading[1].textContent = siteContent["main-content"]["about-h4"];
heading[2].textContent = siteContent["main-content"]["services-h4"];
heading[3].textContent = siteContent["main-content"]["product-h4"];
heading[4].textContent = siteContent["main-content"]["vision-h4"];

const img2 = document.getElementById('middle-img');
img2.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const pageContent = document.querySelectorAll('div.text-content > p');
pageContent[0].textContent = siteContent["main-content"]["features-content"];
pageContent[1].textContent = siteContent["main-content"]["about-content"];
pageContent[2].textContent = siteContent["main-content"]["services-content"];
pageContent[3].textContent = siteContent["main-content"]["product-content"];
pageContent[4].textContent = siteContent["main-content"]["vision-content"];


let contactH = document.querySelector('section.contact h4');
contactH.textContent = siteContent.contact['contact-h4'];

let contactInfo = document.querySelectorAll('section.contact > p');
contactInfo[0].innerHTML = siteContent.contact.address;
contactInfo[1].innerHTML = siteContent.contact.phone;
contactInfo[2].innerHTML = siteContent.contact.email;


document.querySelector("footer p").innerHTML = siteContent.footer.copyright;


