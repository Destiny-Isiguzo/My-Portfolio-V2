import './style-components/resets.css';
import './style-components/utils.css';
import './style-components/header.css';
import './style-components/home.css';
import './style-components/about.css';
import './style-components/button-utils.css';
import './style-components/services.css';
import './style-components/projects.css';
import './style-components/contact.css';
import './style-components/style.css';







const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Toggle nav menu
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
   })
}

// Hide nav menu
if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
   })
}



// Remove nav menu on link click
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
   navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));






// Header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
   if (window.scrollY > 50) {
      header.classList.add('shadow-header');
   } else {
      header.classList.remove('shadow-header');
   }
})