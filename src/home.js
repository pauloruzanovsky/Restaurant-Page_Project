import GeraniumPhoto from "./img/geranium001.jpg";
import TeamPhoto from "./img/team-photo.jpg";



export default function homePage() {
    const content = document.getElementById('content');

    // Homepage
    const home = document.createElement('div');
    home.className = 'home';
    content.append(home);

    // Img 1
    const img1 = document.createElement('img');
    img1.className = 'team-photo';
    img1.src = TeamPhoto;
    img1.alt = "Team photo";
    home.append(img1);

    // Text 1
    const text1 = document.createElement('div');
    text1.className = 'text-1';
    text1.innerHTML =  `<h1 class='title'>Welcome to Ruza's Ristorante</h1>

                        <p>Thoughtfulness can be tasted</p>

                        <p>Ruza's kitchen is lucid, light and dynamic. Our mission is to create 
                        meals that involve all our senses - restores, challenges and enriches.</p>
                        "Dynamic means force and stands for the living formative forces of nature. 
                        These forces are not visible, but their biologic "footprints" are. The effects 
                        can be seen if one learns to observe and understand the connections 
                        between the formative forces and the physical matter of all organisms".`
    home.append(text1);


    // Text 2
    const text2 = document.createElement('div');
    text2.className = 'text-2';
    text2.innerHTML =  `<h1 class="title">Dinner in the canopy</h1>

    <p>The restaurant is situated on the 8th floor in Fælledparken (Common Gardens) in the center 
    of Copenhagen, from where one can follow the seasons' journey through the tree crowns,
    catch glimpses of the city's green copper roofs and just see the windmills of Oeresund.</p>

    <p>The location emphasizes Geranium's vision of gastronomic clarity and diversity. We explore 
    the area of tension between the urbane and the natural.</p>`
    home.append(text2);

    // Img 2
    const img2 = document.createElement('img');
    img2.src = GeraniumPhoto;
    img2.alt = "Geranium";
    home.append(img2);

}