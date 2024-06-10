import './style-components/resets.css';
import './style-components/utils.css';
import './style-components/header.css';
import './style-components/home.css';
import './style-components/about.css';
import './style-components/button-utils.css';
import './style-components/services.css';
import './style-components/projects.css';
import './style-components/contact.css';
import './style-components/footer.css';
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


// Footer year
const year = document.getElementById('year');
const currentYear = new Date().getFullYear();
year.innerText = currentYear;


// Scrollup button show & hide
const scrollUpBtn = document.getElementById('scrollup__button');

scrollUpBtn.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

window.addEventListener('scroll', () => {
	if (window.scrollY > 2000) {
		scrollUpBtn.classList.add('scrollup__button-show');
	} else {
      scrollUpBtn.classList.remove('scrollup__button-show');
	}
});


// Scroll sections active link
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
   const scrollDown = window.scrollY;

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute('id');
      const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
         sectionsClass.classList.add('active-link');
      } else {
         sectionsClass.classList.remove('active-link');
      }
   })
}
window.addEventListener('scroll', scrollActive);


// Dark light theme toggle
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-fill';

// previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// we obtain the current theme of the site by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-fill';

// we validate if the user previously chose a theme
if (selectedTheme) {
   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
   themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme);
}

// activate & deactivate the theme manually on click
themeButton.addEventListener('click', () => {
   // add or remove the dark - icon theme
   document.body.classList.toggle(darkTheme);
   themeButton.classList.toggle(iconTheme);
   // we save the theme and the current icon
   localStorage.setItem('selected-theme', getCurrentTheme());
   localStorage.setItem('selected-icon', getCurrentIcon());
})