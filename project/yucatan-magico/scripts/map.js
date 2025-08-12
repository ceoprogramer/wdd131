
// 1. init map
    var map = L.map('mapid').setView([20.65, -89.0], 8); // Centrado en Yucatán

    // 2. Add map layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    // 3. Maya data
var ruins = [
    {
        name: 'Cenote Kankirixche',
        latlng: [20.7303, -89.6200],
        image: 'images/cenotes/kankirixche04.jpg',
        description: 'Cenote Kankirixche is a semi-open cenote on the Yucatán Peninsula, near Abalá. It is known for its large cavity, crystal-clear waters, and natural beauty, making it ideal for swimming and diving.'
    },
    {
        name: 'Cenote Eknacan Paraíso Papakal',
        latlng: [20.7230, -89.3490],
        image: 'images/cenotes/papakal03.jpg',
        description: 'Known as Cenote Papakal, it is part of the Cuzamá cenote route. It is a semi-open cenote with blue waters and a natural setting perfect for a refreshing swim.'
    },
    {
        name: 'Cenote Suytun',
        latlng: [20.6517, -88.1517],
        image: 'images/cenotes/suytun01.jpg',
        description: 'Cenote Suytun is famous for its circular platform that is illuminated by a sunbeam filtering through an opening in the roof, creating a stunning visual spectacle.'
    },
    {
        name: 'Playa Norte Celestún',
        latlng: [20.8659, -90.4074],
        image: 'images/beaches/celestun01.jpg',
        description: 'Celestún is a picturesque fishing village on the coast of Yucatán, known for its Biosphere Reserve, where you can spot pink flamingos and enjoy beautiful white sand beaches.'
    },
    {
        name: 'Puerto Progreso',
        latlng: [21.2828, -89.6644],
        image: 'images/beaches/progreso01.jpg',
        description: 'Puerto Progreso is an important port on the Yucatán coast. Its beaches, its 6.5 km long pier, and its renovated boardwalk make it a popular tourist destination.'
    },
    {
        name: 'Puerto de Sisal',
        latlng: [21.1648, -90.0435],
        image: 'images/beaches/sisal02.jpeg',
        description: 'Puerto de Sisal is a picturesque fishing village with a rich historical past. Its white sand beaches and calm waters make it ideal for relaxation. It is known for being a former henequen trade port.'
    },
    {
        name: 'Labna',
        latlng: [20.0886, -89.5969],
        image: 'images/arqueology/labna01.jpg',
        description: 'Labná is a Mayan archaeological site, famous for its richly ornamented arch and palace. It is part of the Puuc region and is an example of classic Mayan architecture.'
    },
    {
        name: 'Chichén Itzá',
        latlng: [20.6843, -88.5678],
        image: 'images/arqueology/Chichen_Itza_01.jpg',
        description: 'Chichén Itzá is one of the main archaeological sites on the Yucatán Peninsula in Mexico. It is famous for its Kukulcán pyramid, a stepped temple that reveals a serpent of light and shadow during the equinoxes.'
    },
    {
        name: 'Uxmal',
        latlng: [20.3619, -89.7744],
        image: 'images/arqueology/uxmal01.jpg',
        description: 'Uxmal is an ancient Mayan ceremonial center, considered one of the most important archaeological sites of the Mayan culture. The Pyramid of the Magician is its most emblematic structure, with a unique oval shape.'
    },
    {
        name: 'Ekʼ Balam',
        latlng: [20.8876, -88.1366],
        image: 'images/arqueology/ekbalam.jpg',
        description: 'Ek\' Balam, which means "black jaguar" in Mayan, is an archaeological site with impressive, well-preserved stucco friezes in its acropolis. It is located near Valladolid in the municipality of Temozón and is known for the tomb of King Ukit Kan Lek Tok.'
    },
    {
        name: 'Dzibilchaltún',
        latlng: [21.0858, -89.5919],
        image: 'images/arqueology/dzibi.jpg',
        description: 'Dzibilchaltún is a Mayan site that stands out for the Temple of the Seven Dolls. During the equinox, the rising sun aligns perfectly with the temple’s doorway, creating a stunning light spectacle.'
    }
];
    // 4. Modal Window
    var modal = document.getElementById("ruinModal");
    var modalTitle = document.getElementById("modal-title");
    var modalImage = document.getElementById("modal-image");
    var modalDescription = document.getElementById("modal-description");
    var closeButton = document.getElementsByClassName("close-button")[0];

    // 5. create marks and add clic event
    ruins.forEach(function(ruin) {
        var marker = L.marker(ruin.latlng).addTo(map);
        marker.on('click', function() {
            modalTitle.textContent = ruin.name;
            modalImage.src = ruin.image;
            modalDescription.textContent = ruin.description;
            modal.style.display = "block";
        });
    });

    // 6. Functions to close modal windows
    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    // Close modal window if user clic out of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

