const hamburgerMenu = document.getElementById('hamburger-menu');
const close = document.getElementById('close');
const navMenu = document.getElementById('navMenu');

// Function to open the menu
function openMenu(){
    hamburgerMenu.style.display = 'none';
    close.style.display = 'block';
    navMenu.style.display = 'flex';
    navMenu.style.background = 'white';
}

// Function to open the menu
function closeMenu(){
    hamburgerMenu.style.display = 'block';
    close.style.display = 'none';
    navMenu.style.display = 'none';
    navMenu.style.background = '';
}
//Check Screen Size
 function screenSize(){
    if (window.innerWidth <= 640) {
        hamburgerMenu.addEventListener('click', openMenu);
        close.addEventListener('click', closeMenu);
    }
 }
 screenSize();