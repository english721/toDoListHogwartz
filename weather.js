
const API_KEY = '';


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude ;
    console.log("You live in", lat, lng)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        const weather = document. querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const iconElement = document.querySelector(".weather-icon");
        weather.iconId = data.weather[0].icon;
        city.innerText= data.name;
        weather.innerText= `${data.weather[0].main} / ${data.main.temp}°C`;
        iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    });
}

function onGeoError(){
    alert("당신의 위치를 파악하지 못하여 날씨를 알려드리지 못합니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
