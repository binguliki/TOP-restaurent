import aboutPage from "./about";
import homePage from "./home";
import contactPage from "./contact";
import menuPage from "./menu";
import './home.css';

document.addEventListener('DOMContentLoaded', () => {
  const homeBtn = document.querySelector('#home-btn');
  const aboutBtn = document.querySelector('#about-btn');
  const menuBtn = document.querySelector('#menu-btn');
  const contactBtn = document.querySelector('#contact-btn');
  const contentContainer = document.querySelector('#content');

  const clearContent = () => {
    contentContainer.innerHTML = '';
  }
  homeBtn.onclick = () => {
    clearContent();
    contentContainer.appendChild(homePage());
  };
  aboutBtn.onclick = () => {
    clearContent();
    contentContainer.appendChild(aboutPage());
  };
  menuBtn.onclick = () => {
    clearContent();
    contentContainer.appendChild(menuPage());
  };
  contactBtn.onclick = () => {
    clearContent();
    contentContainer.appendChild(contactPage());
  };
  
  console.log('hello');
  homeBtn.click();
});
