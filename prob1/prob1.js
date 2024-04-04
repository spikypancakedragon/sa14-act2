
const form = document.getElementById('cityForm');
form.addEventListener('submit', 
async function(event) { 
    event.preventDefault();
    var cityName = document.getElementById('city').value;
    var thisThing = "http://api.weatherapi.com/v1/forecast.json?key=b1f7372db07c43cfbee23040242803&q=" + cityName + "&days=4&aqi=no&alerts=no"
    var response = await fetch(thisThing)
    var json = await response.json();

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
console.log("forecast", json)
    document.getElementById("high1").textContent = json["forecast"]["forecastday"][0]["day"]["maxtemp_f"]
    document.getElementById("low1").textContent = json["forecast"]["forecastday"][0]["day"]["mintemp_f"]
    document.getElementById("cond1").textContent = json["forecast"]["forecastday"][0]["day"]["condition"]["text"]
    document.getElementById("forecast1").src = "https:" + json["forecast"]["forecastday"][0]["day"]["condition"]["icon"]

    document.getElementById("high2").textContent = json["forecast"]["forecastday"][1]["day"]["maxtemp_f"]
    document.getElementById("low2").textContent = json["forecast"]["forecastday"][1]["day"]["mintemp_f"]
    document.getElementById("cond2").textContent = json["forecast"]["forecastday"][1]["day"]["condition"]["text"]
    document.getElementById("forecast2").src = "https:" + json["forecast"]["forecastday"][1]["day"]["condition"]["icon"]

    document.getElementById("high3").textContent = json["forecast"]["forecastday"][2]["day"]["maxtemp_f"]
    document.getElementById("low3").textContent = json["forecast"]["forecastday"][2]["day"]["mintemp_f"]
    document.getElementById("cond3").textContent = json["forecast"]["forecastday"][2]["day"]["condition"]["text"]
    document.getElementById("forecast3").src = "https:" + json["forecast"]["forecastday"][2]["day"]["condition"]["icon"]

    document.getElementById("high4").textContent = json["forecast"]["forecastday"][3]["day"]["maxtemp_f"]
    document.getElementById("low4").textContent = json["forecast"]["forecastday"][3]["day"]["mintemp_f"]
    document.getElementById("cond4").textContent = json["forecast"]["forecastday"][3]["day"]["condition"]["text"]
    document.getElementById("forecast4").src = "https:" + json["forecast"]["forecastday"][3]["day"]["condition"]["icon"]
});

