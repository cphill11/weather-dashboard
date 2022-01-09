const form = document.querySelector("#user-form");
const input = document.querySelector("#city");
const localStoreKey = "weatherApp";

// create & initialize empty object for local storage; It is a common practice to declare objects with the const keyword. uses JS object literal  https://www.w3schools.com/js/js_object_definition.asp
// this is set up to prep for local storage
var storageObject = {};


// connect to API
form.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = input.value||"north royalton";
  const apiKey = "5fdc5c82d91fcc6b7408351d973910b5";

  // use https://openweathermap.org/api/one-call-api     will need to rebuild, use lon & latitude

  //https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}, create new branch to work out API for UV index; also add endpoint that turns city name into lon & lat
  // https://openweathermap.org/api/geocoding-api

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&appid=${apiKey}&units=imperial`;
  const encoded = encodeURI(url);
  console.log(url);
  console.log(encoded);
 
  //becuase the service returns in 3 hour increments, we need to divide result by 5 to get the first value for each day - adjusted to display for 12pm
  const dayFilter = [5,13,21,29,37];
  fetch(encoded).then(response => response.json()).then(data => {
      // do stuff w/ data
      console.log(data);

      // if the code key is not 200, input is invalid for search
      if(data.cod !== null && data.cod !== '200'){
        //earch error
        window.alert(inputVal + ' is not a real city... please select a valid city');
        Promise.resolve();
        return;
      }

    const filteredDataForStorage = [];
      dayFilter.forEach(filter => filteredDataForStorage.push(data.list[filter]));
      data.listFiltered = filteredDataForStorage;

      // first store, then display data
      storageObject[inputVal] = data;
      console.log(storageObject); 

      localStorage.setItem(localStoreKey, JSON.stringify(storageObject));
  
      // call next functions
      displayForecastCurrentDay(data);
      displayForecastFiveDay(data);
      recentSearches();
  });
});

const displayForecastCurrentDay = function(forecastData) {
  // access span in Current City section; create variable for code simplification

  var weatherChars = forecastData.listFiltered[0];
  var date = new Date(weatherChars.dt_txt); 
  var icon = `https://openweathermap.org/img/wn/${
    weatherChars.weather[0]["icon"]
  }@2x.png`;

  document.getElementById("city-title-current").innerHTML = forecastData.city.name + " (" + date.toLocaleDateString("en-US") + ")";

  document.getElementById("city-temp-current").innerHTML = "temp: " + weatherChars.main.temp + " <sup>°F</sup> ";

  document.getElementById("city-wind-current").innerHTML = "wind: " + weatherChars.wind.speed + " MPH";
  
  document.getElementById("city-humidity-current").innerHTML = "humidity: " + weatherChars.main.humidity + "%";
  
  document.getElementById("city-icon-current").src= icon;
  
 // UV index needs to be done still!! 
 //document.getElementById("city-uv-index-current").innerHTML = "uv-index" + weatherChars.main.uvindex //

}

const displayForecastFiveDay = function(forecastData) {
  // access span in Current City section; create variable for code simplification
  // loop 
  for(var i=0; i < forecastData.listFiltered.length; i++) {

  var weatherChars = forecastData.listFiltered[i];
  var date = new Date(weatherChars.dt_txt); 
  var icon = `http://openweathermap.org/img/wn/${
    weatherChars.weather[0].icon
  }@2x.png`;

  
    // use i to refer to index to streamline code
  document.getElementById("city-date-" + i).innerHTML = date.toLocaleDateString("en-US");

  document.getElementById("city-temp-" + i).innerHTML = "temp: " + weatherChars.main.temp + " <sup>°F</sup> ";

  document.getElementById("city-wind-" + i).innerHTML = "wind: " + weatherChars.wind.speed + " MPH";
  
  document.getElementById("city-humidity-" + i).innerHTML = "humidity: " + weatherChars.main.humidity + "%";

  document.getElementById("city-icon-" + i).src= icon;

  // UV index needs to be done still!! 
 // document.getElementById("city-uv-index-current").innerHTML = "uv-index" + weatherChars.main.uvindex //

  }
}

const recentSearches = function() {
  var searches = JSON.parse(localStorage.getItem(localStoreKey));

  // retrieving list of keys for each search done
  var objectKeys = Object.keys(searches);
  console.log(objectKeys);

  var searchHtml = "";
  for(var i=0; i < objectKeys.length; i++) {
    searchHtml += '<a href="#" onclick="onRecentSearchClick(this.id); return false;" id="' + objectKeys[i] + '" class="card-header search-click">' +objectKeys[i]+'</a>';
  }  

  document.getElementById("recent-searches").innerHTML = searchHtml;
}

const onRecentSearchClick = function(id) {
  const searchData = storageObject[id];
  displayForecastCurrentDay(searchData);
  displayForecastFiveDay(searchData);
}

// on init, check local storage for recent searches
if(localStorage.getItem(localStoreKey) !== null){
  storageObject = JSON.parse(localStorage.getItem(localStoreKey));
  recentSearches();
}