document.addEventListener("DOMContentLoaded", function () {
    // Sélection des éléments nécessaires
    const burgerMenu = document.querySelector('.burger__menu');
    const headerNav = document.querySelector('.header__nav');
    const navLinks = document.querySelectorAll('.header__nav__item');
    const lightIcon = document.getElementById("light-icon");
    const darkIcon = document.getElementById("dark-icon");
    const darkmodeElement = document.getElementById("darkMode");
    const langButton = document.getElementById('lang-toggle-btn');
    const translateElements = document.querySelectorAll('[data-translate]');

    // Vérification de l'existence des éléments
    if (!burgerMenu || !headerNav || !lightIcon || !darkIcon || !darkmodeElement || !langButton) {
        console.error("Un ou plusieurs éléments nécessaires sont manquants dans le HTML.");
        return;
    }

    // Gestion du Dark Mode
    function toggleDarkMode() {
        const isDarkMode = document.body.classList.toggle("dark-mode");
        lightIcon.style.display = isDarkMode ? "block" : "none";
        darkIcon.style.display = isDarkMode ? "none" : "block";
        localStorage.setItem("darkMode", isDarkMode);
    }

    function loadDarkModePreference() {
        const darkModePreference = localStorage.getItem("darkMode") === "true";
        document.body.classList.toggle("dark-mode", darkModePreference);
        lightIcon.style.display = darkModePreference ? "block" : "none";
        darkIcon.style.display = darkModePreference ? "none" : "block";
    }

    loadDarkModePreference();

    darkmodeElement.addEventListener('click', toggleDarkMode);

    // Gestion du menu burger
    function toggleBurgerMenu() {
        const isOpen = headerNav.classList.toggle('open');
        burgerMenu.textContent = isOpen ? "✕" : "☰";
    }

    burgerMenu.addEventListener('click', toggleBurgerMenu);

    navLinks.forEach((link, index) => {
        if (index < navLinks.length - 2) {
            link.addEventListener('click', () => {
                headerNav.classList.remove('open');
                burgerMenu.textContent = "☰";
            });
        }
    });

    // Gestion des traductions
    function getBrowserLanguage() {
        const browserLanguage = navigator.language || navigator.languages[0];
        return browserLanguage.startsWith('fr') ? 'fr' : 'en';
    }

    let lang = localStorage.getItem("lang") || getBrowserLanguage();

    function loadTranslations(language) {
        fetch(`../data/translations_${language}.json`)
            .then(response => response.json())
            .then(data => {
                translateElements.forEach(element => {
                    const key = element.getAttribute('data-translate');
                    if (data[key]) {
                        element.innerHTML = data[key];
                    }
                });
            })
            .catch(error => console.error('Erreur lors du chargement des traductions :', error));
    }

    loadTranslations(lang);

    langButton.addEventListener('click', function () {
        lang = lang === 'en' ? 'fr' : 'en';
        localStorage.setItem("lang", lang);
        loadTranslations(lang);
    });
});
