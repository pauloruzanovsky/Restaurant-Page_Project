export default function header() {

// Header
const header = document.createElement('header');
header.innerHTML = `<h1 class="header-title"> RUZA'S RISTORANTE</h1>
                        <ul class='dishes-buttons'>
                           <button class='home-button'>Home</button>
                           <button class='dishes-button'>Dishes</button>
                           <button class='contact-button'>Contact</button>
                        </ul> `;
header.classList.add('header');
content.insertBefore(header,content.firstElementChild);
}