document.addEventListener("DOMContentLoaded", () => {
    const form = document.forms.admission;

    // Récupération des champs du formulaire par leur nom
    const { nom, prénom, email, telephone, adresse, citoyenneté, cycle, programmes } = form.elements;

    // Fonction pour valider le format de l'email
    const estEmailValide = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Fonction pour afficher les messages d'erreur
    function afficherErreur(champ, message) {
        let erreur = champ.parentElement.querySelector('.erreur');
        if (!erreur) {
            erreur = document.createElement('div');
            erreur.className = 'erreur';
            champ.parentElement.appendChild(erreur);
        }
        erreur.textContent = message;
        erreur.style.color = "red";
    }

    // Fonction pour valider un champ spécifique
    const validerChamp = (champ) => {
        switch (champ.name) {
            case 'email':
                if (!estEmailValide(champ.value)) {
                    afficherErreur(champ, 'Veuillez entrer une adresse email valide.');
                    return false;
                }
                break;
            case 'nom':
            case 'prénom':
            case 'telephone':
            case 'adresse':
                if (!champ.value.trim()) {
                    afficherErreur(champ, `${champ.previousElementSibling.textContent.replace(' :', '')} est requis.`);
                    return false;
                }
                break;
           
            case 'cycle':
            case 'programmes':
                if (!champ.value) {
                    afficherErreur(champ, `${champ.previousElementSibling.textContent.replace(' :', '')} est requis.`);
                    return false;
                }
                break;
            default:
                break;
        }
        // Supprime l'erreur si le champ est valide
        const erreur = champ.parentElement.querySelector('.erreur');
        if (erreur) {
            erreur.textContent = '';
        }
        return true;
    };

    // Ajoute un écouteur d'événement pour la soumission du formulaire
    form.addEventListener("submit", (event) => {
        // Empêcher la soumission par défaut du formulaire
        event.preventDefault();

        // Effacer les messages d'erreur précédents
        document.querySelectorAll('.erreur').forEach(el => el.textContent = '');

        let aDesErreurs = false;

        // Valide les champs du formulaire
        [nom, prénom, email, telephone, adresse, citoyenneté, cycle, programmes].forEach(champ => {
            if (!validerChamp(champ)) {
                aDesErreurs = true;
            }
        });

        // Si aucune erreur, gérer la soumission du formulaire
        if (!aDesErreurs) {
            console.log('Données du formulaire valides et prêtes à être soumises.');
            alert('Formulaire soumis avec succès !');
            
        }
    });

    // Validation en temps réel
    form.addEventListener('input', (event) => {
        validerChamp(event.target);
    });
});
