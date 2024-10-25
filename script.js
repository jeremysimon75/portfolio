// script.js
document.addEventListener('DOMContentLoaded', () => {
    const animation = document.getElementById('animation-lancement');
    setTimeout(() => {
        animation.style.display = 'none';
    }, 3000);

    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        const triggerBottom = window.innerHeight / 1.2;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add('apparait');
            }
        });
    });
});
