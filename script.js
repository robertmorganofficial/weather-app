const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const weatherImage = document.getElementById('weatherImage');
const weatherTemp = document.getElementById('weatherTemp');
const city = document.getElementById('city');


fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=London&aqi=no`)
    .then(response => console.log(response.json()))
    .then(data => console.log(data))
    .catch(error => console.log(error));