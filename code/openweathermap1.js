function showWeather(city,lat,lon) { 
  if (city!==null && city !==undefined) {
  // if (lat===undefined) {
    var url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6dea5956b591b31aeabd991991a32023&units=metric&lang=pt`;
  } else {
    var url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6dea5956b591b31aeabd991991a32023&units=metric&lang=pt`;
  }

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response.status);
      }
    })
    .then(json => {
      let iconUrl="http://openweathermap.org/img/wn/"+json.weather[0].icon+".png";
      let content="";
      content+=`<h2>${json.name}</h2>`;
      content+=`<p><img src="${iconUrl}"> ${json.weather[0].main}</p>`;
      content+=`<p>${json.weather[0].description}</p>`;
      content+=`<p>${json.main.temp}º</p>`;
      document.querySelector("#weatherConditions").innerHTML=content;
    })
    .catch(error => {
      // console.log("An error occurred: "+error);
      switch (error) {
        case 404:
          alert("Incorrect city!");
          break;
        case 401:
          alert("Invalid API key!");
          break;
        default:
          alert("An error has occurred - please try again later!");
      }

      // if (error=404) {
      //   alert("Incorrect city!");
      // } else if (error=401) {
      //   alert("Invalid API key!");
      // } else {
      //   alert("An error has occurred - please try again later!");
      // }

    });
}

let cities=document.querySelectorAll(".city");
for (let city of cities) {
  city.addEventListener("click",function() {
    let cityName=city.getAttribute("data-city");
    // let cityName=city.textContent;
    showWeather(cityName);
  });
}

function geoSuccess(position) {
  console.log(position);
  let latitude=position.coords.latitude;
  let longitude=position.coords.longitude;
  showWeather(null,latitude,longitude);
}
function geoError(error) {
  alert("Could not retrieve your current location - "+error.message);
  // code: 1, message: 'User denied Geolocation'
  console.log(error);
}

document.querySelector("#current").addEventListener("click", function() {
  if ('geolocation' in navigator) {
    // alert("Geolocation works!");
    // navigator.geolocation.watchPosition()
    // geoSuccess is a callback
    navigator.geolocation.getCurrentPosition(geoSuccess,geoError);
  } else {
    alert("Geolocation not supported!");
    // give the user a chance to input the coordinates
  }
});

