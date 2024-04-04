async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'd72729578543cfc435344f99b226b1c9';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error("An error occurred while fetching data, please check city name again");
        document.getElementById('weatherInfo').innerHTML = "<span class='text-danger'>An error occurred while fetching data, please check city name again</span>";
    }
}

function displayData(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const currentTemp = data.main.temp;
    const minTemp = data.main.temp_min;
    const maxTemp = data.main.temp_max;
    const windSpeed = data.wind.speed;
    const weatherActual = data.weather[0].main;

    weatherInfo.innerHTML = `
        <h4>Weather in ${data.name} is ${weatherActual}</h4>
        <p>Current temp is ${currentTemp}°C. Max Temp is ${maxTemp}°C. Min Temp is ${minTemp}°C.</p>
        <p>WindSpeed is ${windSpeed} m/s</p>
    `;
}
