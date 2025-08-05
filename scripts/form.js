// script.js
const medium = document.querySelector("#medium");
const year = document.querySelector("#year");
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Populate Product Name select options
    const productNameSelect = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id; // Use id for value
        option.textContent = product.name; // Use name for display
        productNameSelect.appendChild(option);
    });

    // Set last modification date in the footer
    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = new Date(document.lastModified).toLocaleString();
    }

    // --- LocalStorage for review counter (demonstrated as if on review.html) ---
    // This part would typically be on the review.html page
    if (window.location.pathname.endsWith('review.html')) {
        let reviewCount = localStorage.getItem('reviewCount');
        if (reviewCount) {
            reviewCount = parseInt(reviewCount) + 1;
        } else {
            reviewCount = 1;
        }
        localStorage.setItem('reviewCount', reviewCount);
        console.log(`Total reviews completed: ${reviewCount}`);
        // You would typically display this count on the review.html page
        // For example: document.getElementById('reviewCountDisplay').textContent = reviewCount;
    }
});

// use the date object
const today = new Date();

medium.innerHTML = `Last Modification:  ${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "medium"
	}
).format(today)}`;

year.innerHTML = ` ${today.getFullYear()}&copy; Erika Fabiola Sánchez Solano  Mérida Yuc. México.`;


        // This part of the script is for the review.html page
        document.addEventListener('DOMContentLoaded', () => {
            // Increment and display the review count from localStorage
            let reviewCount = localStorage.getItem('reviewCount');
            if (reviewCount) {
                reviewCount = parseInt(reviewCount) + 1;
            } else {
                reviewCount = 1;
            }
            localStorage.setItem('reviewCount', reviewCount);
            
            const reviewCountDisplay = document.getElementById('reviewCountDisplay');
            if (reviewCountDisplay) {
                reviewCountDisplay.textContent = reviewCount;
            }

            // Set last modification date in the footer
            const lastModifiedSpan = document.getElementById('lastModified');
            if (lastModifiedSpan) {
                lastModifiedSpan.textContent = new Date(document.lastModified).toLocaleString();
            }
        });
    