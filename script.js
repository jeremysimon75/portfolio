document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Supprimer la classe active de toutes les sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Ajouter la classe active à la section ciblée
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).classList.add('active');

        // Mettre à jour la couleur de la barre de navigation
        document.querySelectorAll('.navbar ul li a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');

        // Scroller vers le haut de la section
        window.scrollTo({ top: document.querySelector(targetId).offsetTop, behavior: 'smooth' });
    });
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
