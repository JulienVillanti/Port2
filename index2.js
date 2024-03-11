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


// Hamburger menu part

const burger = document.querySelector('#burger-menu');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');

burger.addEventListener('click', () => {
    mobileMenuContainer.classList.toggle('show');
});