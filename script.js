// Fonction pour filtrer les certifications
function filterCertifications(category) {
    const certifications = document.querySelectorAll('.certification');

    certifications.forEach(cert => {
        if (category === 'all' || cert.classList.contains(category)) {
            cert.style.display = 'block';
        } else {
            cert.style.display = 'none';
        }
    });
}

// Affichage de la première section au chargement
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    sections[0].classList.add('active');

    // Ajoute l'événement de clic pour la navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
        });
    });
});
