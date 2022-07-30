import homePage from './home.js';
import header from './header.js';
import createDishes from './dishes.js';
import createContact from './contact.js';
import './style.css';

header();
homePage();


let content = document.getElementById('content');
let homeButton = document.querySelector('.home-button');
let dishesButton = document.querySelector('.dishes-button');
let contactButton = document.querySelector('.contact-button');

function removeContentChildren() {
    while (content.children.length>1) {
        content.removeChild(content.lastChild);
    }
}


homeButton.addEventListener('click', () => {
    removeContentChildren();
    homePage();
})

dishesButton.addEventListener('click', () => {
    removeContentChildren();
    createDishes();
})

contactButton.addEventListener('click', () => {
    removeContentChildren();
    createContact();
})

