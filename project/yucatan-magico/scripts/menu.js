const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const resGrid = document.querySelector('.res-grid'); // Select div to display temple cards

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show'); // class 'show' in UL nav
    hambutton.classList.toggle('show'); // class 'show' in hamburger button
});