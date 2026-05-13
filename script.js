 // Typed.js Initialization
var typed = new Typed('#element', {
    strings: ['Web Developer', 'AIML Intern', 'Data Analyst', 'Research Analyst'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});