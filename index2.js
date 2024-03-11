// Scroll to top
let mybtn = document.getElementById('scroll-up');

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    let scrollPosition = window.innerHeight + window.scrollY;
    let documentHeight = document.body.offsetHeight;
    let triggerPoint = 0.9; //(0.9 for 90% from the top)

    if ((scrollPosition / documentHeight) > triggerPoint) {
        mybtn.style.display = 'block';
    } else {
        mybtn.style.display = 'none';
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}


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