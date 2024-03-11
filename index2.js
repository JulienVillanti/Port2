// Scroll to top
let mybtn = document.getElementById('scroll-up');

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        mybtn.style.display = 'block';
    } else {
        mybtn.style.display = 'none';
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}


// const scrollUp = document.querySelector('#scroll-up');
// scrollUp.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth',
//     });
// });

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