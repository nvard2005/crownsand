const burger = document.querySelector('.navbar-menu-toggle');
const mobileMenu = document.querySelector('.navbar-menu');
const dropdownLinks = document.querySelectorAll('.menu-item-has-children > a');

// Burger Toggle
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('show-menu');
});

// Dropdown Toggle (Click on Desktop + Mobile)
dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        const parent = link.parentElement;
        parent.classList.toggle('open');

        // Close other dropdowns
        document.querySelectorAll('.menu-item-has-children')
            .forEach(item => {
                if (item !== parent) item.classList.remove('open');
            });
    });
});