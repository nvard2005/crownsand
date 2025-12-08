// Load header.html into the placeholder element
document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("#header-placeholder").innerHTML = data;

            // After header is inserted → initialize menu scripts
            initHeaderScripts();
        });
});

function initHeaderScripts() {
    const burger = document.querySelector('.navbar-menu-toggle');
    const mobileMenu = document.querySelector('.navbar-menu');
    const dropdownLinks = document.querySelectorAll('.menu-item-has-children > a');

    // Burger Toggle
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('show-menu');
    });

    // Dropdown Toggle
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

    const SCROLL_THRESHOLD = 8;

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        const delta = currentScroll - lastScrollTop;

        if (Math.abs(delta) < SCROLL_THRESHOLD) return;

        if (delta > 0 && currentScroll > 80) {
            topBar.classList.add("hide");
        } else if (delta < 0) {
            topBar.classList.remove("hide");
        }

        if (currentScroll > 20) {
            innerNavbar.classList.add("scrolled");
        } else {
            innerNavbar.classList.remove("scrolled");
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
}
