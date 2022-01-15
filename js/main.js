import { UI_ELEM } from './view.js';
import { tab } from './tab.js';
import { storage } from './storage.js';

tab();

const SERVER_URL_WEATHER = 'http://api.openweathermap.org/data/2.5/weather';
const SERVER_URL_FORECAST = 'http://api.openweathermap.org/data/2.5/forecast';
const API_KEY = 'f660a2fb1e4bad108d6160b7f58c555f';
const weatherData = {};

function initial() {
   if (localStorage.getItem('cities')) {
      const favoriteCities = storage.getFavoriteCities();
      for (let city of favoriteCities) {
         UI_ELEM.LOCATION_LIST.append(createNewElement(city));
      }
   } else {
      localStorage.setItem('cities', '[]');
   }
}

initial();

function fetchCityWeather(cityName) {
   const url = `${SERVER_URL_WEATHER}?q=${cityName}&appid=${API_KEY}&units=metric`;
   fetch(url)
      .then(status)
      .then(json)
      .then(jsonCity)
      .then(setWeatherData)
      .catch(error => {
         UI_ELEM.NOWS_CITY.textContent = 'Not Found';
         UI_ELEM.INPUT_NAME.classList.add('error');
      });
}

UI_ELEM.FORM.addEventListener('submit', function (event) {
   event.preventDefault();
   UI_ELEM.NOWS__LIKE.setAttribute('src', './images/shape.svg');
   UI_ELEM.INPUT_NAME.classList.remove('error');
   fetchCityWeather(UI_ELEM.INPUT_NAME.value);

   this.reset();
})

function status(response) {
   if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
   } else {
      return Promise.reject(new Error(response.statusText));
   }
}

function json(response) {
   return response.json();
}

function jsonCity(data) {
   weatherData.cityName = data.name;
   weatherData.cityTemperature = Math.round(data.main.temp);
   weatherData.icon = data.weather[0].icon;
   weatherData.feelsLike = Math.round(data.main.feels_like);
   weatherData.weather = data.weather[0].main;
   weatherData.sunrise = data.sys.sunrise;
   weatherData.sunset = data.sys.sunset;

   return new Promise(resolve => {
      resolve(weatherData);
   });
}

function setWeatherData(weatherData) {
   UI_ELEM.NOWS_CITY.textContent = weatherData.cityName;
   UI_ELEM.NOWS_DEGREES.textContent = `${weatherData.cityTemperature}°`;
   UI_ELEM.NOWS_ICON.src = `http://openweathermap.org/img/wn/${weatherData.icon}@4x.png`;
   UI_ELEM.DETAILS_CITY.textContent = weatherData.cityName;
   UI_ELEM.DETAILS_TEMP.textContent = `Temperature: ${weatherData.cityTemperature}°`;
   UI_ELEM.DETAILS_FEEL.textContent = `Feels like: ${weatherData.feelsLike}°`;
   UI_ELEM.DETAILS_WEATHER.textContent = `Weather: ${weatherData.weather}`;
   UI_ELEM.DETAILS_SUNRISE.textContent = `Sunrise: ${changeDetailsDateFormat(weatherData.sunrise)}`;
   UI_ELEM.DETAILS_SUNSET.textContent = `Sunset: ${changeDetailsDateFormat(weatherData.sunset)}`;
}

function changeDetailsDateFormat(time) {
   const date = new Date(time * 1000);
   const hour = addZerro(date.getHours());
   const min = addZerro(date.getMinutes());
   return `${hour}:${min}`
}

function addZerro(num) {
   if (num >= 0 && num <= 9) {
      return `0${num}`
   } else {
      return num
   }
}

function City(name) {
   this.name = name;
   this.isLiked = true;
}

function createLikedList() {
   UI_ELEM.NOWS__LIKE.addEventListener('click', function () {
      UI_ELEM.NOWS__LIKE.setAttribute('src', './images/liked.svg');

      const newLikedCity = new City(weatherData.cityName);

      const favoriteCities = storage.getFavoriteCities();
      if (!favoriteCities.has(newLikedCity.name)) {
         const newCityElem = addNewCity();
         changeLocalStorage(newCityElem);
      }
   })
}

createLikedList();

function saveCities(cities) {
   try {
      storage.saveFavoriteCities(cities);
   } catch (error) {
      alert('out of local storage space!');
   }
}

function changeLocalStorage(newCity) {
   try {
      const favoriteCities = storage.getFavoriteCities();
      favoriteCities.add(newCity);
      storage.saveFavoriteCities(favoriteCities);
   } catch (error) {
      alert('out of local storage space!');
   }
}

function addNewCity() {
   if (weatherData.cityName) {
      const newCityElement = createNewElement(weatherData.cityName);
      UI_ELEM.LOCATION_LIST.append(newCityElement);
   }
   return weatherData.cityName
}

function createNewElement(city) {
   const cityElement = document.createElement('li');
   cityElement.classList.add('item__location-link');
   cityElement.textContent = city;

   cityElement.addEventListener('click', function (event) {
      UI_ELEM.NOWS__LIKE.setAttribute('src', './images/liked.svg');
      UI_ELEM.INPUT_NAME.classList.remove('error');
      UI_ELEM.FORECAST_CITY.textContent = cityElement.textContent;

      fetchCityWeather(cityElement.textContent);
      fetchCityForecast(cityElement.textContent);
   })

   const deleteButton = document.createElement('input');
   deleteButton.type = 'button';
   deleteButton.classList.add('delete-button');

   deleteButton.addEventListener('click', function (event) {
      event.stopImmediatePropagation();
      const filteredCities = filterCities(event.target);
      saveCities(filteredCities);
      removeCity(event.target);
   })

   cityElement.append(deleteButton);

   return cityElement;
}

function removeCity(button) {
   button.parentElement.remove();
}

function filterCities(button) {
   const favoriteCities = storage.getFavoriteCities();
   const deletedCity = button.parentElement.textContent.trim();
   const FILTERED_CITIES = [...favoriteCities].filter(city => city !== deletedCity);
   return FILTERED_CITIES
}


UI_ELEM.FORECAST.addEventListener('click', function () {
   UI_ELEM.FORECAST_CITY.textContent = UI_ELEM.NOWS_CITY.textContent;
   fetchCityForecast(UI_ELEM.NOWS_CITY.textContent);
})

async function fetchCityForecast(cityName) {
   const url = `${SERVER_URL_FORECAST}?q=${cityName}&appid=${API_KEY}&units=metric`;

   try {
      const response = await fetch(url);
      const statusResult = await status(response);
      const data = await json(statusResult);
      const forecastList = data.list.slice(0, 20);
      createTables(forecastList);

   } catch (error) {
      UI_ELEM.FORECAST_CITY.textContent = 'Not Found';
   }
}

function deleteZerro(num) {
   if (num >= 0 && num <= 9) {
      return num.slice(1)
   } else {
      return num
   }
}

function changeFormatForecastDate(date) {
   const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   const fullDate = date.slice(0, 10);
   const arr = fullDate.split('-');
   const month = deleteZerro(arr[1]);
   const newFormatDate = `${arr[2]} ${months[month]}`;
   return newFormatDate;
}

function createTables(forecastList) {
   UI_ELEM.FORECAST_TABLES.innerHTML = '';

   for (let element of forecastList) {

      let table = document.createElement('table');
      table.classList.add('about__table');
      let tr1 = document.createElement('tr');
      tr1.classList.add('about__table-tr');
      let td1 = document.createElement('td');
      td1.classList.add('about__table-td', 'first');
      td1.textContent = changeFormatForecastDate(element.dt_txt);
      let td2 = document.createElement('td');
      td2.classList.add('about__table-td', 'first');
      td2.textContent = element.dt_txt.slice(11, 16);
      tr1.append(td1, td2);

      let tr2 = document.createElement('tr');
      tr1.classList.add('about__table-tr');
      let td3 = document.createElement('td');
      td3.classList.add('about__table-td');
      td3.textContent = `Temperature: ${Math.round(element.main.temp)}°`;
      let td4 = document.createElement('td');
      td4.textContent = element.weather[0].main;
      tr2.append(td3, td4);

      let tr3 = document.createElement('tr');
      tr3.classList.add('about__table-tr');
      let td5 = document.createElement('td');
      td5.classList.add('about__table-td');
      td5.textContent = `Feels like: ${Math.round(element.main.feels_like)}°`;
      let td6 = document.createElement('td');
      let img = document.createElement('img');
      img.classList.add('table-img');
      img.src = `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`;
      td6.append(img);
      tr3.append(td5, td6);

      table.append(tr1, tr2, tr3);
      UI_ELEM.FORECAST_TABLES.append(table);
   }
}