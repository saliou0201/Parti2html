// notre_université.js

document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour afficher le contenu
    function showContent(event) {
        const targetId = event.target.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);

        if (targetContent) {
            targetContent.classList.remove('hidden');
        }
    }

    // Fonction pour masquer le contenu
    function hideContent(event) {
        const targetId = event.target.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);

        if (targetContent) {
            targetContent.classList.add('hidden');
        }
    }

    // Sélectionner tous les titres
    const titles = document.querySelectorAll('main h1[data-target]');

    titles.forEach(title => {
        title.addEventListener('mouseover', showContent);
        title.addEventListener('mouseout', hideContent);
    });
});
