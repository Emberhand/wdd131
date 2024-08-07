// get dates for the footer
const currentyear = document.getElementById("currentyear")
currentyear.innerText = new Date().getFullYear();
const lastModified = document.getElementById("lastModified")
lastModified.innerText = new Date(document.lastModified);

function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
    return Math.round(35.74 + (0.6215 * (temp)) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * (temp) * (windSpeed ** 0.16)));
    }else { return "N/A"}
}

const windchill = document.getElementById("windchill")
windchill.innerText = calculateWindChill(-63.8, 21);