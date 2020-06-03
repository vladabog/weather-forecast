"use strict";

searchButton.addEventListener('click', searchWeather);

function searchWeather() {
    loadingText.style.display = 'block';
    weatherBox.style.display = 'none';
    var cityName = searchCity.value;
    if (cityName.trim().length == 0) {
        return alert('Unesite ime grada');
    }
    var http = new XMLHttpRequest();
    var apiKey = 'd83927cc8caf7df03d423c7ec49063c1';
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey;
    var method = 'GET';

    http.open(method, url);
    http.onreadystatechange = function () {
        if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {
            var data = JSON.parse(http.responseText);
            var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
            weatherData.temperature = data.main.temp;
            weatherData.minTemp = data.main.temp_min;
            weatherData.maxTemp = data.main.temp_max;
            weatherData.icon = data.weather[0].icon;
            weatherData.state = data.sys.country;
            updateWeather(weatherData);
        } else if (http.readyState === XMLHttpRequest.DONE) {
            alert('Something went wrong!');
        }
    };
    http.send();
}

function updateWeather(weatherData) {
    weatherCity.textContent = weatherData.cityName;
    weatherDescription.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;
    minTemp.textContent = weatherData.minTemp;
    maxTemp.textContent = weatherData.maxTemp;
    icon.innerHTML = weatherData.icon;
    state.textContent = weatherData.state;
    loadingText.style.display = 'none';
    weatherBox.style.display = 'block';
}
