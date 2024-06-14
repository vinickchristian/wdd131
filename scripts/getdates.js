// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the HTML file
const lastModifiedDate = new Date(document.lastModified).toLocaleDateString();

// Update the copyright year in the footer
document.getElementById('currentyear').textContent = currentYear;

// Update the last modified date in the footer
document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;
