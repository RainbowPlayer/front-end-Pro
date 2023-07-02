fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')

.then(function(response) {
    return response.json();
})

.then(function(obj) {

    const weather = document.querySelector('#weather');

    let weatherInfo = '';
    weatherInfo += 'Місто: ' + obj.name + '<br>';
    weatherInfo += 'Температура: ' + obj.main.temp + '<br>';
    weatherInfo += 'Тиск: ' + obj.main.pressure + '<br>';
    weatherInfo += 'Опис: ' + obj.weather[0].description + '<br>';
    weatherInfo += 'Вологість: ' + obj.main.humidity + '<br>';
    weatherInfo += 'Швидкість вітру: ' + obj.wind.speed + '<br>';
    weatherInfo += 'Напрям вітру (у градусах): ' + obj.wind.deg + '<br>';
    weatherInfo += 'Значок: <img src="' + 'http://openweathermap.org/img/w/' + obj.weather[0].icon + '.png' + '">' + '<br>';

    weather.innerHTML = weatherInfo;
    
})

.catch(function(err) {
    console.log(err);
});