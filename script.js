// Hamburger menu part===========================================

const burgerMenu = document.getElementById('burger-menu');
const navList = document.querySelector('.nav-list');

burgerMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".nav-link");


    navLinks.forEach(function (navLink) {
        navLink.addEventListener("click", function (event) {

            event.preventDefault();


            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);


            targetSection.scrollIntoView({
                behavior: "smooth"
            });


            const navList = document.querySelector(".nav-list");
            navList.classList.remove("active");


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
// Test form gathering
function validateAndSubmit() {
    let name = document.getElementById('name-field').value;
    let email = document.getElementById('email-field').value;
    let message = document.getElementById('message-field').value;

    if (!isValidEmail(email)) {
        alert('Please enter a valid email!')
        return;
    }
    if (isFieldEmpty(name, email, message)) {
        return;
    }

    const formData = "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Message: " + message + "\n\n";


    const blob = new Blob([formData], { type: "text/plain;charset=utf-8" });

    let a = document.createElement('a');
    a.style.display = 'none';
    document.body.appendChild(a);

    a.download = "form_data.txt";

    a.href = window.URL.createObjectURL(blob);

    a.click();

    window.URL.revokeObjectURL(a.href);
    document.body.removeChild(a);
}

function isValidEmail(email) {
    let emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;;
    return emailRgx.test(email);
}
function isFieldEmpty(name, email, message) {
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill out all fields before submitting. Thank you!');
        return true;
    }
    return false;
}

//NOTE===========================
//unfortunately could not get the form info to be forwarded to me, it downloads the info to the senders computer as a .txt file, 
//but cannot forward it to me, I could've user a 3rd party platform but will probably update once we studied DB.
