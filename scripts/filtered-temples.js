

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const resGrid = document.querySelector('.res-grid'); // Select div to display temple cards


hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show'); // class 'show' in UL nav
    hambutton.classList.toggle('show'); // class 'show' in hamburger button
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    
];

// call function to create cards when page is loaded
document.addEventListener('DOMContentLoaded', () => {
    createTemplateCard(temples); // Pasa todos los templos inicialmente
    updateFooterDates(); // Llama a la función para actualizar el pie de página
});

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
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`); 
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

      
        //Add card to contain .res-grid
        resGrid.appendChild(card);
    });
}




document.querySelector('.navigation').addEventListener('click', (event) => {
     if (event.target.tagName === 'A') {
         const filterType = event.target.textContent.toLowerCase();
         let filtered = [];
         if (filterType === 'home') {
             filtered = temples;
        } else if (filterType === 'old') {
             filtered = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        
        } else if (filterType === 'new') {
             filtered = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        } else if (filterType === 'large') {
            
            filtered = temples.filter(temple => temple.area > 90000);
        } else if (filterType === 'small') {
            
            filtered = temples.filter(temple => temple.area < 10000);
        }
        
        createTemplateCard(filtered);
     }
 });
