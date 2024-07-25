document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('nav .menu');
    const hamburgerButton = document.querySelector('.hamburger');

    hamburgerButton.addEventListener('click', () => {
        menu.classList.toggle('open');
        hamburgerButton.textContent = menu.classList.contains('open') ? '✖' : '☰';
    });
    // Form submission
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        // Store form data in localStorage
        localStorage.setItem('contactForm', JSON.stringify({ name, email, message }));

        // Display success message
        alert('Thank you for your message!');

        // Reset form
        event.target.reset();
    });

    // Lazy load images
    let lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });
    
});
