/* const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
 */

d = new Date();
year = d.getFullYear();
document.getElementById("year").innerHTML = year;
document.getElementById("lastModified").innerHTML = document.lastModified;


function calculateWindChill(temperature, windSpeed) {
    if (temperature > 50 || windSpeed < 3) {
        return "Wind chill is not applicable.";
    }

    let windChill = 35.74 + (0.6215 * temperature) 
                    - (35.75 * Math.pow(windSpeed, 0.16)) 
                    + (0.4275 * temperature * Math.pow(windSpeed, 0.16));

    return `Wind Chill Factor: ${windChill.toFixed(2)}°F`;
}

function displayWindChill() {
    let temp = 30;  // Static temperature value
    let wind = 10;  // Static wind speed value

    let result = calculateWindChill(temp, wind);
    document.getElementById("result").textContent = result;
}


window.addEventListener("load", displayWindChill);


