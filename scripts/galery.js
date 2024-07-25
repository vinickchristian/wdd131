document.addEventListener("DOMContentLoaded", function () {
     // Load gallery images
 loadGalleryImages();

const menu = document.querySelector('nav .menu');
const hamburgerButton = document.querySelector('.hamburger');

hamburgerButton.addEventListener('click', () => {
    menu.classList.toggle('open');
    hamburgerButton.textContent = menu.classList.contains('open') ? '✖' : '☰';
});

});
function loadGalleryImages() {
    const galleryContainer = document.querySelector(".gallery");
    
    const images = [
        { src: "images/pexels-1.webp", alt: "Description of photo 1" },
        { src: "images/pexels-6.webp", alt: "Description of photo 2" },
        {src:"images/pexels-3.webp", alt:"Description of Image 3" },
        {src:"images/pexels-7.webp", alt:"Description of Image 4" },
        {src:"images/pexels-5.webp", alt:"Description of Image 5" },
        {src:"images/pexels-2.webp", alt:"Description of Image 6" },
        {src:"images/pexels-8.webp", alt:"Description of Image 7" },
        {src:"images/pexels-9.webp", alt:"Description of Image 8" },
        {src:"images/pexels-4.webp", alt:"Description of Image 9" },
        {src:"images/miamo.webp", alt:"Description of Image 10" },
        {src:"images/pexels-12.webp", alt:"Description of Image 8"},
        {src:"images/pexels-13.webp", alt:"Description of Image 9"},
    ];

    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        galleryContainer.appendChild(imgElement);
    });
}

