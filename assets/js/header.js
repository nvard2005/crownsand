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
let lastScrollTop = 0;
const topBar = document.querySelector(".navbar-top");
const innerNavbar = document.querySelector(".navbar-inner");

// small threshold to avoid rapid hide/show on minor scrolls
const SCROLL_THRESHOLD = 8;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const delta = currentScroll - lastScrollTop;

    if (Math.abs(delta) < SCROLL_THRESHOLD) {
        // tiny scroll — ignore (prevents jitter)
        return;
    }

    if (delta > 0 && currentScroll > 80) {
        // scrolling down and scrolled enough -> hide top bar
        topBar.classList.add("hide");
    } else if (delta < 0) {
        // scrolling up -> show top bar
        topBar.classList.remove("hide");
    }

    // optional: add subtle shadow when inner navbar is scrolled
    if (currentScroll > 20) {
        innerNavbar.classList.add("scrolled");
    } else {
        innerNavbar.classList.remove("scrolled");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

