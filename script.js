// Fonction pour filtrer les certifications
function filterCertifications(category) {
    document.querySelectorAll('.certification').forEach(cert => {
        cert.style.display = (category === 'all' || cert.classList.contains(category)) ? 'block' : 'none';
    });
}

// Affichage de la première section au chargement et gestion de la navigation
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    sections[0].classList.add('active');

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => section.classList.toggle('active', section.id === targetId));
        });
    });

    // Lancer l'animation de présentation et tri des articles de veille
    typeWriter();
    trierArticles();
});

// Animation de typewriter pour la présentation
const texts = [
    "root@localhost:~# login",
    "Login: root",
    "Password: ********",
    "~# Bonjour,",
    "~# Bienvenue sur mon portfolio.",
    "~# Je suis Jérémy SIMON, j'ai 19 ans.",
    "~# Passionné d'informatique et de nouvelles technologies depuis mon plus jeune âge, j'ai naturellement souhaité en faire mes études.",
    "~# À l'issue de mon BTS, je souhaiterais poursuivre vers une licence professionnelle ou un bachelor, avec un master 2 en perspective.",
    "~# L'administration système et la gouvernance des infrastructures informatiques m'intéressent particulièrement, notamment le poste de RSSI.",
];
let textIndex = 0, charIndex = 0, speed = 50;

function typeWriter() {
    if (textIndex < texts.length) {
        if (charIndex < texts[textIndex].length) {
            document.getElementById("presentation").innerHTML += texts[textIndex].charAt(charIndex++);
            setTimeout(typeWriter, speed);
        } else {
            document.getElementById("presentation").innerHTML += "<br>";
            charIndex = 0;
            textIndex++;
            setTimeout(typeWriter, 100); // Pause avant la phrase suivante
        }
    }
}

// Fonction pour afficher/masquer les informations des cercles interactifs
function toggleInfo(circle) {
    const info = circle.querySelector('.circle-info');
    document.querySelectorAll('.circle-info').forEach(el => el.style.display = 'none');
    info.style.display = info.style.display === 'block' ? 'none' : 'block';
}

// Gestion des cartes et cercles avec animation flip
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flip'));
});

document.querySelectorAll('.circle-inner').forEach(circle => {
    circle.addEventListener('click', () => circle.classList.toggle('clicked'));
});

// Fonction pour trier les articles de veille par date décroissante
function trierArticles() {
    const container = document.getElementById('veilleContainer');
    const articles = Array.from(container.getElementsByClassName('veille-item'));

    articles.sort((a, b) => new Date(b.getAttribute('data-date')) - new Date(a.getAttribute('data-date')));

    container.innerHTML = '';
    articles.forEach(article => container.appendChild(article));
}
