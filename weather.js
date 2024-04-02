async function getWeather() {
    const apiKey = '229b0bf6a5d2dc0c2be846932347b234';
    const url ='https://api.openweathermap.org/data/2.5/weather?q=08536&appid=93f26e3c57081a6210de53b8dcfdfea4' ;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const weatherInfo = parseWeatherData(data);
        displayWeatherInfo(weatherInfo);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        displayError('Failed to fetch weather data. Please try again later.');
    }
}

function parseWeatherData(data) {
    return {
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        description: data.weather[0].description
    };
}

function displayWeatherInfo(weatherInfo) {
    const weatherInfoElement = document.getElementById('weather-info');
    weatherInfoElement.innerHTML = `
        <h2>Weather in ${weatherInfo.city}, ${weatherInfo.country}</h2>
        <p>Temperature: ${weatherInfo.temperature}°C</p>
        <p>Description: ${weatherInfo.description}</p>
    `;
}

function displayError(message) {
    const weatherInfoElement = document.getElementById('weather-info');
    weatherInfoElement.innerHTML = `<p>${message}</p>`;
}

getWeather();
