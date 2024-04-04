
const form = document.getElementById('cityForm');
form.addEventListener('submit', 
async function(event) { 
    event.preventDefault();
    var cityName = document.getElementById('city').value;
    var thisThing = "http://api.weatherapi.com/v1/current.json?key=b1f7372db07c43cfbee23040242803&q=" + cityName
    var response = await fetch(thisThing)
    var json = await response.json();

    // var paragraph = document.createElement('p');
    // paragraph.textContent = JSON.stringify(json);
    // document.body.appendChild(paragraph);

    var divs = document.getElementsByClassName("display");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "block";
    }

    var cityData = document.getElementById("cityData");
    cityData.textContent = cityName;

    var timeData = document.getElementById("timeData");
    timeData.textContent = json["location"]["localtime"];

    var tempData = document.getElementById("tempData");
    tempData.textContent = json["current"]["temp_f"];

    var condData = document.getElementById("condData");
    condData.textContent = json["current"]["condition"]["text"];

    var humidData = document.getElementById("humidData");
    humidData.textContent = json["current"]["humidity"];

    var icon = document.getElementById("icon");
    icon.src = "https:" + json["current"]["condition"]["icon"]
});

