const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

function toggleMenu() {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : 'auto';
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Close sidebar when clicking a link
const sidebarLinks = document.querySelectorAll('.sidebar .nav-links a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});