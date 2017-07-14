const container = document.getElementById("listContainer");
let debug = null;

// callback for no success getting location from user's browser
function geolocError(){
  console.log("Error getting user's location :(");
}

// API call onerror callback function
function onerrorFunc(){
  // print an error message to page
   printListItem("Sorry, an error occurred");
}

// helper method to call API and convert longitude & latitude to a human friendly address
function getWeather(){
  if(document.getElementById('Seattle').checked) {
      let mapUri = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=-47.6762&lon=-122.3182&units=imperial&APPID=178a29ccb40fbe761020a3e6fbfcda60";
      let request = new XMLHttpRequest();
      request.open("GET", mapUri, true);
      request.onload = onloadFunc;
      request.onerror = onerrorFunc;
      request.send();
  }
  if(document.getElementById('London').checked) {
      let mapUri = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=51.5074&lon=0.1278&units=imperial&APPID=178a29ccb40fbe761020a3e6fbfcda60";
      let request = new XMLHttpRequest();
      request.open("GET", mapUri, true);
      request.onload = onloadFunc;
      request.onerror = onerrorFunc;
      request.send();
  }
  if(document.getElementById('Shuzenji').checked) {
      let mapUri = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=imperial&APPID=178a29ccb40fbe761020a3e6fbfcda60";
      let request = new XMLHttpRequest();
      request.open("GET", mapUri, true);
      request.onload = onloadFunc;
      request.onerror = onerrorFunc;
      request.send();
  }
  if(document.getElementById('MyLocation').checked){
    // get user's location from the browser
    navigator.geolocation.getCurrentPosition(geolocSuccess, geolocError);

    function geolocSuccess(position){
    const newPos = {lat: position.coords.latitude, lng: position.coords.longitude};
    console.log(newPos);
    let mapUri = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${newPos.lat}&lon=${newPos.lng}&units=imperial&APPID=178a29ccb40fbe761020a3e6fbfcda60`;
    let request = new XMLHttpRequest();
    request.open("GET", mapUri, true);
    request.onload = onloadFunc;
    request.onerror = onerrorFunc;
    request.send();
    }
  }
  function onloadFunc(){
    const resp = JSON.parse(this.response);
    let weatherData = `Temperature: + ${resp.main.temp}`;
    //let li = document.createElement("li");
    //li.innerHTML = weatherData;
    //document.querySelector("#weather-data").appendChild(li);
    document.getElementById("weather-data").innerHTML = weatherData;
    let temp = `${resp.main.temp}`;
    if(temp > 60){
      document.getElementById("weather-reaction").innerHTML = "Wear a Sweater!!";
    }
    else {
      document.getElementById("weather-reaction").innerHTML = "Wear a Coat!!";
    }
      }
    }
