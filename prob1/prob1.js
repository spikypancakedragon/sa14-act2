const form = document.getElementById('cityForm');
form.addEventListener('submit', function(event) { 
    event.preventDefault();
    var cityName = document.getElementById('city').value;
    var paragraph = document.createElement('p');
    paragraph.textContent = 'City Name: ' + cityName;
    document.body.appendChild(paragraph);
});
