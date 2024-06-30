

document.addEventListener("DOMContentLoaded", function() {
 // Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the HTML file
const lastModifiedDate = new Date(document.lastModified).toLocaleDateString();

// Update the copyright year in the footer
document.getElementById('currentyear').textContent = currentYear;

// Update the last modified date in the footer
document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;

    // Static values for temperature and wind speed
    const temperature = 10; // °C
    const windSpeed = 5; // km/h

    // Function to calculate wind chill factor
    function calculateWindChill(temp, speed) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
    }

    // Check if the conditions for wind chill calculation are met
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);

        // Display the wind chill value in the weather section
        const windChillElement = document.querySelector(".weather-section .wind-chill .value");
        windChillElement.textContent = `${windChill} °C`;
    }
});
