const button = document.getElementById("button")
button.addEventListener('click', 
async function(event) {
    event.preventDefault();

    var sourceCurrency = document.getElementById("sourceCurrency").value;
    var thisThing = "https://v6.exchangerate-api.com/v6/b6e4039990b263ab7b327619/latest/" + sourceCurrency;
    var response = await fetch(thisThing);
    var json = await response.json();

    var targetCurrency = document.getElementById("targetCurrency").value;
    var exchangeRate = json["conversion_rates"][targetCurrency]
    var result = document.getElementById("sourceAmt").value * exchangeRate

    document.getElementById("rate").textContent = exchangeRate
    document.getElementById("num").textContent = result + " " + targetCurrency
});

