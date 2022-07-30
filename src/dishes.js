import DishPhoto from "./img/geranium dish.jpg";

export default function createDishes() {
    const content = document.getElementById('content');

    // Dishes page
    const dishes = document.createElement('div');
    dishes.className = 'dishes';
    dishes.innerHTML = `      <div class='left-section'>
                                <h1 class='menu'>MENU</h1>
                                <div class="menu-dish"> 
                                    <div class="dish-name">The Summer Universe (minimum 3 hours)</div>
                                    <div class="dish-price">3200 BRL</div>
                                </div>
                                <h1 class="wine-pairings">WINE PAIRINGS</h1>
                                <div class="wine">
                                <div class="wine-name">Heart & Soil</div>
                                <div class="wine-price">2000 BRL</div>
                                </div>
                                <div class="wine">
                                <div class="wine-name">Classic & Appellation</div>
                                <div class="wine-price">4000 BRL</div>
                                </div>
                                <div class="wine">
                                <div class="wine-name">Big & Bold</div>
                                <div class="wine-price">6000 BRL</div>
                                </div>
                                <div class="wine">
                                <div class="wine-name">Rare & Unique</div>
                                <div class="wine-price">18000 BRL</div>
                                </div>
                                <div class="wine">
                                <div class="wine-name">Non Alcoholic Pairing</div>
                                <div class="wine-price">1300 BRL</div>
                                </div>
                            </div>`

    content.append(dishes);

const img3 = document.createElement('img');
img3.src = DishPhoto;
img3.className = 'right-section';
img3.alt = "Dish Photo";
dishes.append(img3);
}