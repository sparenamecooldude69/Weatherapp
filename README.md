Weather App 🌦️
A simple weather application that allows users to get the current weather conditions of any city using the OpenWeather API. The app provides weather details such as temperature, humidity, wind speed, and displays an appropriate icon based on the weather condition.

Features
🌍 Search weather by city name
🌡️ Display temperature in Celsius
💧 Show humidity and wind speed
🌤️ Weather icons for different conditions (e.g., Clear, Rain, Clouds)
🔄 Support for both button click and Enter key press
🛠️ Error handling for invalid city names
⏳ Loading indicator while fetching data
Technologies Used
HTML: Structure of the web page
CSS: Styling of the interface
JavaScript: Logic to fetch and display weather data
OpenWeather API: Provides real-time weather information
How to Run the App
Clone the repository:
bash
git clone <repository-url>
cd weather-app
Open the index.html file in your browser:
bash
Copy code
open index.html  # (on Mac)
start index.html # (on Windows)
How to Use the App
Enter the city name in the input field.
Press Enter or click the Search button to fetch the weather.
The weather details will be displayed, including:
City Name
Temperature (in °C)
Humidity (%)
Wind Speed (km/h)
Relevant weather icon (e.g., ☀️ for Clear weather)
If the city is not found, an error message will be shown.
Code Snippet (API Call Example)
javascript
Copy code
const apiKey = "your_api_key_here";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    try {
        const response = await fetch(apiURL + city + `&appid=${apiKey}`);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();
        updateUI(data);
    } catch (error) {
        console.error(error.message);
    }
}
API Setup
Visit the OpenWeather website and create a free account.
Get your API key from the dashboard.
Replace the API key in your JavaScript code:
javascript
Copy code
const apiKey = "your_openweather_api_key";
Improvements for the Future
🌐 Add geolocation support to get the user’s current location weather.
📱 Make the app mobile responsive with improved CSS styling.
🔔 Display alerts for extreme weather conditions.
🌙 Add a dark mode option for better accessibility.
Contributing
Feel free to contribute! Fork the repository, make your changes, and create a pull request.

License
This project is licensed under the MIT License.

Contact
For any questions or feedback, feel free to reach out:
📧 Email: your-email@example.com