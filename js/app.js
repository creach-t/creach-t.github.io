document.addEventListener("DOMContentLoaded", function() {
    // Sélection des éléments du menu burger
    const burgerMenu = document.querySelector('.burger__menu');
    const headerNav = document.querySelector('.header__nav');
    const navLinks = document.querySelectorAll('.header__nav__item');
    const lightIcon = document.getElementById("light-icon");
    const darkIcon = document.getElementById("dark-icon");
    const darkmodeElement = document.getElementById("darkMode");

    // Function to toggle dark mode
    function toggleDarkMode() {
        // Toggle dark-mode class on body
        document.body.classList.toggle("dark-mode");

        // Toggle light and dark icons
        if (document.body.classList.contains("dark-mode")) {
            lightIcon.style.display = "block";
            darkIcon.style.display = "none";
            localStorage.setItem("darkMode", true);
        } else {
            lightIcon.style.display = "none";
            darkIcon.style.display = "block";
            localStorage.setItem("darkMode", false);
        }
    }

    // Check if dark mode preference is stored in local storage
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        darkIcon.style.display = "none";
    } else {
        lightIcon.style.display = "none";
    }

    // Écouteur d'événement pour le clic sur le menu burger
    burgerMenu.addEventListener('click', function() {
        // Bascule la classe 'open' pour afficher ou masquer le menu
        headerNav.classList.toggle('open');
        if (headerNav.classList.contains('open')) {
            burgerMenu.textContent = "✕";
        } else {
            burgerMenu.textContent = "☰";
        }
    });

    darkmodeElement.addEventListener('click', function() {
        // Bascule le mode sombre
        toggleDarkMode();
    });

    // Ajout d'un gestionnaire d'événements de clic à chaque lien du menu burger
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Ferme le menu burger en supprimant la classe 'open'
            headerNav.classList.remove('open');
            burgerMenu.textContent = "☰";
        });
    });

    // Chargement des données de traduction
    let lang = localStorage.getItem("lang") || 'en'; // Langue par défaut
    const translateElements = document.querySelectorAll('[data-translate]');

    function loadTranslations(language) {
        fetch(`../data/translations_${language}.json`)
            .then(response => response.json())
            .then(data => {
                // Remplacement du texte dans la page HTML avec les traductions
                translateElements.forEach(element => {
                    const key = element.getAttribute('data-translate');
                    if (data[key]) {
                        element.innerHTML = data[key];
                    }
                });
            })
            .catch(error => console.error('Error loading translations:', error));
    }

    // Charger les traductions au chargement de la page
    loadTranslations(lang);

    // Écouter le clic sur le bouton de changement de langue
    const langButton = document.getElementById('lang-toggle-btn');
    langButton.addEventListener('click', function() {
        // Basculez entre les langues
        lang = lang === 'en' ? 'fr' : 'en';
        localStorage.setItem("lang", lang); // Enregistrer la langue sélectionnée dans le localStorage
        // Charger les traductions pour la nouvelle langue
        loadTranslations(lang);
    });
});
