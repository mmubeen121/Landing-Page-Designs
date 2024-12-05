document.addEventListener('DOMContentLoaded', function() {
    let hamburgerMenu = document.getElementById('hamburgerMenu');
    let close = document.getElementById('close');
    let navMenu = document.getElementById('navMenu');

    // Function to Open Menu on Click
    function openMenu() {
        hamburgerMenu.style.display = 'none';
        close.style.display = 'block';
        navMenu.style.display = 'flex';
        navMenu.style.background = 'white';
    }

    // Function to Close Menu on Click
    function closeMenu() {
        hamburgerMenu.style.display = 'block';
        close.style.display = 'none';
        navMenu.style.display = 'none';
    }

    // Function to Check the Screen Size
    function checkScreenSize() {
        if (window.innerWidth < 640) {
            hamburgerMenu.addEventListener('click', openMenu);
            close.addEventListener('click', closeMenu);
        } else {
            hamburgerMenu.removeEventListener('click', openMenu);
            close.removeEventListener('click', closeMenu);
        }
    }

    // Initial Check
    checkScreenSize();

    // Add Resize Event Listener to Handle Screen Size Changes
    window.addEventListener('resize', checkScreenSize);
});