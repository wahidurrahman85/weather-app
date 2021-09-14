const searchCity = () => {
  const inputField = document.getElementById("input-field");
  searchCityByName(inputField.value);
};

const searchCityByName = (name) => {
  //const url = `api.openweathermap.org/data/2.5/weather?q=${name}&appid=b6acf0e6714ef387d17cfe147aeb349f`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=b6acf0e6714ef387d17cfe147aeb349f`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayWeather(data));
};

const displayWeather = (data) => {
  const weatherStatus = document.getElementById("weather-info");
  weatherStatus.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
 <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" />
 <h1>${data.name}</h1>
 <h3><span>${data.wind.deg}</span>&deg;C</h3>
 <h1 class="lead">${data.weather[0].description}</h1>
 `;
  weatherStatus.appendChild(div);
};
