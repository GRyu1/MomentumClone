const API_KEY = "1e8d4e18c6653b76882d07560e4e2058";
const whetaerContainer = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position){
   const lat = position.coords.latitude;
   const lon = position.coords.longitude;
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
   console.log(url);
   fetch(url)
   .then((response) => response.json())
   .then((data) => {
      city.innerText = "@"+data.sys.country;
      whetaerContainer.innerText = ` ${data.weather[0].main}  /  ${data.main.temp}°C`;
   });
}
function onGeoErr(position){
   alert("위치 정보가 정확하지 않습니다. 날씨를 표현 할 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoErr);