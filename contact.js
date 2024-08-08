document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour afficher une alerte avec les valeurs du formulaire
    function handleFormSubmit(event) {
        event.preventDefault();
        
        // Obtenir les valeurs des champs du formulaire
        const nom = document.getElementById('nom').value.trim();
        const prenom = document.getElementById('prenom').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Variables pour les messages d'erreur
        let errors = [];

        // Validation des champs
        if (!nom) {
            errors.push('Le champ Nom est requis.');
        }
        if (!prenom) {
            errors.push('Le champ Prénom est requis.');
        }
        if (!email) {
            errors.push('Le champ Email est requis.');
        } else if (!validateEmail(email)) {
            errors.push('Le champ Email doit être un email valide.');
        }
        if (!message) {
            errors.push('Le champ Message est requis.');
        }

        // Afficher les erreurs ou les données
        if (errors.length > 0) {
            alert('Veuillez corriger les erreurs suivantes:\n' + errors.join('\n'));
        } else {
            alert(`Nom: ${nom}\nPrénom: ${prenom}\nEmail: ${email}\nMessage: ${message}`);
            // Vous pouvez également ajouter du code ici pour envoyer les données à un serveur
        }
    }

    // Fonction pour valider le format de l'email
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    
    const form = document.getElementById('cntact');

    // Ajouter un gestionnaire d'événement pour la soumission du formulaire
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});
