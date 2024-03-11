// // Scroll to top
// let mybtn = document.getElementById('scroll-up');

// window.onscroll = function () {
//     scrollFunction()
// };

// function scrollFunction() {
//     let scrollPosition = window.innerHeight + window.scrollY;
//     let documentHeight = document.body.offsetHeight;
//     let triggerPoint = 0.9; //(0.9 for 90% from the top)

//     if ((scrollPosition / documentHeight) > triggerPoint) {
//         mybtn.style.display = 'block';
//     } else {
//         mybtn.style.display = 'none';
//     }
// }

// function topFunction() {
//     document.documentElement.scrollTop = 0;
// }


// // function for the smaller button 

// window.onresize = function () {
//     toggleButtons();
// };

// function toggleButtons() {
//     const screenWidth = window.innerWidth;
//     const scrollUpBtn = document.getElementById('scroll-up');
//     const scrollUpIcon = document.getElementById('scroll-up-icon');

//     const maxScreenWidthTextBtn = 768;

//     if (screenWidth <= maxScreenWidthTextBtn) {
//         scrollUpBtn.style.display = 'none';
//         scrollUpIcon.style.display = 'block';
//     } else {
//         scrollUpBtn.style.display = 'block';
//         scrollUpIcon.style.display = 'none';
//     }
// }

// function topFunctionIcon() {
//     document.documentElement.scrollTop = 0;
// }

// toggleButtons();
//---------------------------------------------------------
// let scrollUpBtn = document.getElementById('scroll-up');
// let scrollUpIcon = document.getElementById('scroll-up-icon');

// window.addEventListener('scroll', function () {
//     scrollFunction();
// });

// toggleBtns();

// function scrollFunction() {
//     let scrollPos = window.innerHeight + window.screenY;
//     let docHeight = document.body.offsetHeight;
//     let triggerPt = 0.8;

//     if ((scrollPos / docHeight) > triggerPt) {
//         if (window.innerHeight <= 768) {
//             scrollUpIcon.style.display = 'block';
//             scrollUpBtn.style.display = 'none';
//         } else {
//             scrollUpIcon.style.display = 'none';
//             scrollUpBtn.style.display = 'block';
//         }
//     } else {
//         scrollUpIcon.style.display = 'none';
//         scrollUpBtn.style.display = 'none';
//     }
// }

// function toggleBtns() {
//     const screenWdth = window.innerWidth;
//     const maxScreenWdth = 768;

//     if (screenWdth < maxScreenWdth) {
//         scrollUpBtn.style.display = 'none';
//         scrollUpIcon.style.display = 'block';
//     } else {
//         scrollUpBtn.style.display = 'block';
//         scrollUpIcon.style.display = 'none';
//     }
// }

// function topFunction() {
//     document.documentElement.scrollTop = 0;
// }

// function topFunctionIcon() {
//     document.documentElement.scrollTop = 0;
// }
//===================================================================
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