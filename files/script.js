const apiKey = "595a6486062c37dccddeda798787484a";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    if (!city.trim()) {
        document.querySelector(".error").textContent = "Please enter a valid city name.";
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }
    
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        const weatherCondition = data.weather[0].main;
        switch (weatherCondition) {
            case "Clouds":
                weatherIcon.src = "clouds.png";
                break;
            case "Clear":
                weatherIcon.src = "clear.png";
                break;
            case "Rain":
                weatherIcon.src = "rain.png";
                break;
            case "Drizzle":
                weatherIcon.src = "drizzle.png";
                break;
            case "Mist":
                weatherIcon.src = "mist.png";
                break;
            default:
                weatherIcon.src = "default.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") checkWeather(searchBox.value);
});


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});