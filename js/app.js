document.addEventListener("DOMContentLoaded", function() {
    // Sélection des éléments du menu burger
    const burgerMenu = document.querySelector('.burger__menu');
    const headerNav = document.querySelector('.header__nav');
    const navLinks = document.querySelectorAll('.header__nav__item');
    const lightIcon = document.getElementById("light-icon");
    const darkIcon = document.getElementById("dark-icon");
    const darkmodeElement = document.getElementById("darkMode");

    // Check if dark mode preference is stored in local storage
    let darkMode = localStorage.getItem("darkMode") === "true";

    // Function to toggle dark mode
    function toggleDarkMode() {
        // Toggle darkMode variable
        darkMode = !darkMode;

        // Toggle dark-mode class on body
        document.body.classList.toggle("dark-mode");

        // Toggle light and dark icons
        if (darkMode) {
            lightIcon.style.display = "block";
            darkIcon.style.display = "none";
        } else {
            lightIcon.style.display = "none";
            darkIcon.style.display = "block";
        }

        // Store dark mode preference in local storage
        localStorage.setItem("darkMode", darkMode);
    }

    // Set dark-mode class on body if darkMode is true
    if (darkMode) {
        document.body.classList.add("dark-mode");
        darkIcon.style.display = "none";
    } else {
        lightIcon.style.display = "none";
    }

    // Écouteur d'événement pour le clic sur le menu burger
    burgerMenu.addEventListener('click', function() {
        // Bascule la classe 'open' pour afficher ou masquer le menu
        
        headerNav.classList.toggle('open');
        if(headerNav.classList.contains('open')) {
            burgerMenu.textContent = "✕";            
        }else{
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

    // Sélection des titres de section
    const sectionTitles = document.querySelectorAll('.section__title');

    // function checkScroll() {
    //     // Ajout et suppression de la classe 'animate' pour chaque titre de section
    //     sectionTitles.forEach(title => {
    //         title.classList.add('animate');
    //         setTimeout(() => {
    //             title.classList.remove('animate');
    //         }, 500); 
    //     });
    // }

    // // Exécute checkScroll à chaque fois que la page est défilée
    // window.addEventListener('scroll', checkScroll);

});
