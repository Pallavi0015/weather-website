async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "e46455f29daca1383e3dc21ee5c777e6";

    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
        document.getElementById("result").innerHTML = `
            <h3>Weather in ${city}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } else {
        document.getElementById("result").innerHTML = `
            <p style="color:red;">City not found!</p>
        `;
    }
}
