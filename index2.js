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


// Setting up the hamburger menu

const burger = document.querySelector('#burger-menu');
const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
    ul.classList.toggle('show');
});

// Closing hamburger menu

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((link) =>
    link.addEventListener('click', () => {
        ul.classList.remove('show');
    })
);