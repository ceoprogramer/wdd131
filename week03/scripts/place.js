/**
 * getdates.js
 *
 * This JavaScript update cuurent year and last modification date and display in footer
 *
 */
// select the DOM elements for output

const medium = document.querySelector("#medium");
const year = document.querySelector("#year");

// use the date object
const today = new Date();

medium.innerHTML = `Last Modification:  ${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "medium"
	}
).format(today)}`;

year.innerHTML = ` ${today.getFullYear()}&copy; Erika Fabiola Sánchez Solano  Mérida Yuc. México.`;


  
               // Función para calcular el factor de sensación térmica
        // Fórmula para Fahrenheit: Wind Chill (°F) = 35.74 + 0.6215T - 35.75(V^0.16) + 0.4275T(V^0.16)
        // Restricciones: Temperatura <= 50°F, Velocidad del viento >= 3 mph
        // Si no se cumplen las restricciones, la sensación térmica es igual a la temperatura.
        function calculateWindChill(temperature, windSpeed) {
            if (temperature <= 50 && windSpeed >= 3) {
                // Usando Math.pow para V^0.16
                return (35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16))).toFixed(1);
            } else {
                return temperature.toFixed(1); // Retorna la temperatura si las condiciones no se cumplen
            }
        }

        // Función para simular la obtención de datos del clima
        async function fetchWeatherData() {
            // Generar temperatura aleatoria entre -10 y 100 F
            const temperature = (Math.random() * (100 - (-10)) + (-10)).toFixed(1);
            // Generar velocidad del viento aleatoria entre 0 y 25 mph
            const windSpeed = (Math.random() * 25).toFixed(1);

            const conditionsOptions = ["Soleado", "Nublado", "Lluvioso", "Nevado", "Parcialmente Nublado"];
            const condition = conditionsOptions[Math.floor(Math.random() * conditionsOptions.length)];

            let iconUrl = "https://placehold.co/80x80/A7C7E7/ffffff?text=Icono"; // Icono por defecto

            // Asignar icono basado en la condición
            switch (condition) {
                case "Soleado":
                    iconUrl = "https://placehold.co/80x80/FFD700/000000?text=%E2%98%80%EF%B8%8F"; // Sol
                    break;
                case "Nublado":
                    iconUrl = "https://placehold.co/80x80/B0C4DE/000000?text=%E2%98%81%EF%B8%8F"; // Nube
                    break;
                case "Lluvioso":
                    iconUrl = "https://placehold.co/80x80/87CEEB/000000?text=%E2%9B%86%EF%B8%8F"; // Lluvia
                    break;
                case "Nevado":
                    iconUrl = "https://placehold.co/80x80/ADD8E6/000000?text=%E2%9D%84%EF%B8%8F"; // Nieve
                    break;
                case "Parcialmente Nublado":
                    iconUrl = "https://placehold.co/80x80/C0C0C0/000000?text=%E2%9B%85%EF%B8%8F"; // Sol y Nube
                    break;
                default:
                    iconUrl = "https://placehold.co/80x80/A7C7E7/ffffff?text=Icono"; // Por defecto
            }

            return { temperature, windSpeed, condition, iconUrl };
        }

        // Event listener para ejecutar cuando la página carga
        document.addEventListener('DOMContentLoaded', async function() {
            // Obtener datos del clima simulados
            const weatherData = await fetchWeatherData();

            // Actualiza los valores mostrados en la página
            document.getElementById('display-temp').textContent = weatherData.temperature;
            document.getElementById('display-wind-speed').textContent = weatherData.windSpeed;
            document.getElementById('display-conditions').textContent = weatherData.condition;
            document.getElementById('weather-icon').src = weatherData.iconUrl; // Actualiza la imagen del icono

            // Calcula el factor de sensación térmica con los datos dinámicos
            const windchill = calculateWindChill(parseFloat(weatherData.temperature), parseFloat(weatherData.windSpeed));

            // Muestra el factor de sensación térmica en la página
            document.getElementById('windchill-display').textContent = `${windchill}°F`;

           
        });