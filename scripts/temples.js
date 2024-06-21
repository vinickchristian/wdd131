document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    yearSpan.textContent = currentYear;
    lastModifiedSpan.textContent = lastModified;

    // Hamburger menu functionality
    const menu = document.querySelector('nav .menu');
    const hamburgerButton = document.querySelector('.hamburger');

    hamburgerButton.addEventListener('click', () => {
        menu.classList.toggle('open');
        hamburgerButton.textContent = menu.classList.contains('open') ? '✖' : '☰';
    });

    
    
});
