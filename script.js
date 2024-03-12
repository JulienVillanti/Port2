// Hamburger menu part===========================================

const burgerMenu = document.getElementById('burger-menu');
const navList = document.querySelector('.nav-list');

burgerMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    // Select all navigation links
    const navLinks = document.querySelectorAll(".nav-link");

    // Add click event listener to each navigation link
    navLinks.forEach(function (navLink) {
        navLink.addEventListener("click", function (event) {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Get the target section ID from the href attribute
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll smoothly to the target section
            targetSection.scrollIntoView({
                behavior: "smooth"
            });

            // Close the navigation menu if it's open
            const navList = document.querySelector(".nav-list");
            navList.classList.remove("active");

            // Toggle the menu icon
            const menuIcon = document.querySelector("#burger-menu i");
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
        });
    });
});


//scroll btn part=============================================
let scrollBtn = document.getElementById('scroll-up');
let scrollIconBtn = document.getElementById('scroll-up-icon');

window.addEventListener('scroll', function () {
    toggleButtons();
});

window.addEventListener('resize', function () {
    toggleButtons();
});

function toggleButtons() {
    const screenWidth = window.innerWidth;
    const maxScreenWidthTextBtn = 768;
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.body.offsetHeight;
    const triggerPoint = 0.9; // 0.9 = 90% from the top, for reference

    if ((scrollPosition / documentHeight) > triggerPoint) {
        if (screenWidth <= maxScreenWidthTextBtn) {
            scrollBtn.style.display = 'none';
            scrollIconBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'block';
            scrollIconBtn.style.display = 'none';
        }
    } else {
        scrollBtn.style.display = 'none';
        scrollIconBtn.style.display = 'none';
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}

function topFunctionIcon() {
    document.documentElement.scrollTop = 0;
}

toggleButtons();

// form validation ======================================

function validate() {
    let name = document.getElementById('name-field').value;
    let email = document.getElementById('email-field').value;
    let message = document.getElementById('message-field').value;
}