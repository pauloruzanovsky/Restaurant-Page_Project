export default function header() {

// Header
const header = document.createElement('header');
header.innerHTML = `<h1 class="header-title"> RUZA'S RISTORANTE</h1>
                        <ul class='dishes-buttons'>
                           <button class='home'>Home</button>
                           <button class='dishes'>Dishes</button>
                           <button class='contact'>Contact</button>
                        </ul> `;
header.classList.add('header');
content.insertBefore(header,content.firstElementChild);
}