//Store data
const places = [
    {
        templeName: "Kankirixche",
        location: "Abalá Yucatán",
        dedicated: "This is cavern-type cenote that opens up in the ground. The water is about 15 meters below the surface. You reach the top of a large pile of rubble that's only 1.6 meters deep. Long stalactites hang from the ceiling down to the water, and some even go as deep as 2 meters below the surface. The underwater cavern area is one of the largest, with depths ranging from 5 to 50 meters and a circular shape with a diameter of up to 90 meters. At a certain time of day, sunlight reaches the water, creating spectacular light effects. ",
        area: "Cenote",
        imageUrl: "images/cenotes/kankirixche04.jpg"
    },
    {
        templeName: "Papakal",
        location: "Cuzama Yucatán",
        dedicated: "This is a cavern-type cenote suitable for diving. The grotto is 8 meters high, 40 meters wide, and 40 meters long. It's decorated with several columns that emerge from the water and reach the ceiling. It contains a spectacular network of caves, making it one of the most frequented spots for cave divers. It was first explored in 1980.",
        area: "Cenote",
        imageUrl: "images/cenotes/papakal03.jpg"
    },
    {
        templeName: "Suytun",
        location: "Valladolid Yucatán",
        dedicated: "Cenote Suytun is a magical underground cave in Yucatán, Mexico, known for its stunning turquoise waters and the iconic circular platform that offers a unique and photogenic experience. Visitors can swim in the crystal-clear waters while marveling at the natural rock formations and the sunbeams that pierce through an opening at the top. This mesmerizing cenote is a must-visit for nature lovers and photographers alike.",
        area: "Cenote",
        imageUrl: "images/cenotes/suytun01.jpg"
    },
    {
        templeName: "Xkeken",
        location: "Valladolid",
        dedicated: "It's inside an underground cavern. Sunlight shines through a small natural opening at the top of the dome, illuminating the interior and creating a stunning image with the reflection on the water. The entrance is narrow, and you descend down a staircase carved into the rock, which leads to a space that provides access to the single hall of the cave.",
        area: "Cenote",
        imageUrl: "images/cenotes/xkeken03.jpg"
    },
    {
        templeName: "Celestun",
        location: "Celestun Yucatán",
        dedicated: "An ecotourist paradise in the state of Yucatán, with an area of 59,139 ha and a length of 21 km, officially declared a wildlife refuge since 1979. Among its natural attractions are the Baldiosera spring to the east, where you can swim and dive; there's also the Cambay spring, which is a freshwater cenote. Finally, there's Tambor, where the main attraction is the pink or Caribbean Flamingo, the only known population in North America, which uses the Celestún estuary as a feeding and resting point. The flamingos in Celestún are the pinkest in the world due to the concentration of carotene in the water. You can observe them in their natural ecosystem from boats guided by locals.",
        area: "Beach",
        imageUrl: "images/beaches/celestun01.jpg"
    },
    {
        templeName: "Puerto Progreso",
        location: "Progreso Yucatán",
        dedicated: "Progreso, Yucatán, is a port and coastal city known for its long white-sand beach and calm waters, perfect for enjoying the sea and practicing water sports. Progreso beach is distinguished by its soft sand and shallow waters, ideal for swimming and relaxing. In addition to the beach, Progreso offers an international boardwalk, a promenade with restaurants, bars, and shops where you can enjoy the coastal atmosphere.",
        area: "Beach",
        imageUrl: "images/beaches/progreso01.jpg"
    },
    {
        templeName: "Sisal",
        location: "Sisal Yucatán",
        dedicated: "A legendary coastal port with white-sand beaches and exotic natural scenery. Beautiful migratory birds, such as the Canadian duck, arrive punctually each year seeking the shelter of the warm waters of the Gulf of Mexico. The beach is famous for its natural beauty, tranquility, and the opportunity to enjoy its mangroves and observe migratory birds.",
        area: "Beach",
        imageUrl: "images/beaches/sisal01.jpg"
    },

    {
        templeName: "Chichen Itza",
        location: "Tinum Yucatán",
        dedicated: "The legendary Mayan city of Chichén Itzá, a UNESCO World Heritage site since 1988 and a Wonder of the World since 2007, stood out as a cultural and political center of the ancient Mayan civilization and was one of the most extensive settlements in the north-central Yucatán Peninsula. In its time of greatest splendor, it was the most powerful city on the Yucatán Peninsula.",
        area: "Arqueology",
        imageUrl: "images/arqueology/chichen_itza01.jpg"
    },
    {
        templeName: "Uxmal",
        location: "Santa Elena, Yucatán",
        dedicated: "In the south of Yucatán, the archaeological zone of Uxmal emerges spectacularly as one of the most majestic archaeological sites of the Mayan culture in Yucatán. Its beauty is characterized by low, horizontal palaces arranged around patios or quadrangles. These are richly decorated with highly detailed sculptures made from thousands of perfectly polished and fitted small stones, forming geometric mosaics of unmatched perfection in the entire Mayan region.",
        area: "Arqueology",
        imageUrl: "images/arqueology/uxmal01.jpg"
    },
    {
        templeName: "Labna",
        location: "Oxkutzcab Yucatán",
        dedicated: "A small but important Mayan city that reached its peak between 600 and 900 AD. Its name comes from lab, meaning old, and nah, meaning house: Old House. This site features the flourishing architecture of the 10th and 11th centuries. It's famous for having a beautiful Mayan stone carving: The Arch, which is remarkably perfect and finely ornamented. Its facade includes representations of palm houses and stylized snakes.",
        area: "Arqueology",
        imageUrl: "images/arqueology/labna01.jpg"
    },
    
];

// call function to create cards when page is loaded
document.addEventListener('DOMContentLoaded', () => {
    createTemplateCard(places); //
    //updateFooterDates(); // 
});
function createHome(){    
    
    window.location.href = 'index.html';
    
}

const paginaContactoHTML = `
<main>
    <section class="contactbanner">
        <div class="contactbanner-content"></div>
    </section>
    <br>
    <section id="featuredRivers" class="row-white">
        <div class="container">
            <h1 class="text-center">Contact Us</h1>
           
        </div>
    </section>
    <section class="flex-container">
        <div class="flex-item-form">
            <h2>Contact Form</h2>
            <p class="text-gray">Send us a message and we'll respond within 24 hours.</p>
            <form>
                <fieldset>
                    <legend>Send Us a Message</legend>
                    <div class="form-item column1"><label>Fullname: <input type="text" id="fullname" name="fullname"></label></div> 
                    <div class="form-item column1"><label>Email: <input type="email" id="useremail" name="useremail"></label></div>
                    <div class="form-item column1"><label>Phone: <input type="tel" id="usrphone" name="usrphone"></label></div>    
                    <div class="form-item column2">
                        <label>Trip you're interested in:</label>
                        <select id="trip" name="trip_name" required>
                            <option value="">-- Select an adventure --</option>
                            <option value="single-day">Single Day Trip</option>
                            <option value="multiple-day">Multiple Day Trip</option>
                            <option value="families">Families</option>
                            <option value="groups">Groups</option>
                        </select>
                    </div>
                    <div class="flex-container">¿Which purpose of your trip?
                        <input type="radio" id="purpose1" name="purpose" value="1">
                        <label>Vacations</label><br>
                        <input type="radio" id="purpose2" name="purpose" value="2">
                        <label>businesses</label><br>
                        <input type="radio" id="purpose3" name="purpose" value="3">
                        <label>Other</label><br>
                    </div> 
                    <br>
                    <div class="form-item column2"><label for="additionalComments">Tell us more about what you're looking for:</label>
                        <textarea id="additionalComments" name="additionalComments" rows="6" placeholder="Additional Comments or Special Requests..."></textarea>             
                    </div> 
                </fieldset>    
                <fieldset>
                    <legend>Newsletter. Subscribe with Us</legend> 
                    <div>
                        <input type="checkbox" id="newsletter" name="newsletter" value="Yes">
                        <label for="newsletter">Yes, I want to suscribe to newsletter</label>
                    </div>
                </fieldset> 
                <button type="submit">Send message</button>
            </form>    
        </div>    
    </section>
    <section class="hero-fire">
        <div class="hero-content">    
            <h2>Stay & Enkoy Yucatán, México!</h2>         
            
        </div>
    </section>
    <br>
</main>
`;
function createContact(){ 
    resGrid.innerHTML = paginaContactoHTML;
}    

function createTemplateCard(filteredTemples) { 
    // Clean grid before add new elements  
    resGrid.innerHTML = '';
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
    
        name.textContent = temple.templeName;
        area.innerHTML = `<span class="label">Place:</span> ${temple.area}`;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Info:</span> ${temple.dedicated}`;
       
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Place`); 
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(area);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(img);
        //Add card to contain .res-grid
        resGrid.appendChild(card);
    });
}
// Function Run filter of ancle
function runFilterBasedOnHash() {
    const hash = window.location.hash.substring(1); //Get value without '#'
    if (hash) {
        // Look for the link of menu with ancle 
        const targetLink = document.querySelector(`.navigation a[href="#${hash}"]`);
        if (targetLink) {
            targetLink.click();
        }
    }
}


// 1. Run Function when page run
document.addEventListener('DOMContentLoaded', runFilterBasedOnHash);


//identify changes in ancle when user browse in the same page
window.addEventListener('hashchange', runFilterBasedOnHash);

document.querySelector('.navigation').addEventListener('click', (event) => {
     if (event.target.tagName === 'A') {
         const filterType = event.target.textContent.toLowerCase();
         let filtered = [];
        if (filterType === 'all') {
             filtered = places;
                
        } else if (filterType === 'beaches') {
             filtered = places.filter(temple => temple.area === "Beach");
        } else if (filterType === 'cenotes') {
             filtered = places.filter(temple => temple.area === "Cenote");     
             
        } else if (filterType === 'arqueology') { 
            filtered = places.filter(temple => temple.area === "Arqueology");
        
        } 
        if (filterType === 'home') {
            createHome();
            
        }else if (filterType === 'contact') {
            createContact();
            
        }else{
           createTemplateCard(filtered);
           
           
        }     
     }
 });
