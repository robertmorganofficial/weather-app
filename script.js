const searchButton = document.getElementById('searchButton');
const weatherImage = document.getElementById('weatherImage');
const weatherTemp = document.getElementById('weatherTemp');
const city = document.getElementById('city');

/*
fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=London&aqi=no`)
    .then(response => console.log(response.json()))
    .then(data => console.log(data))
    .catch(error => console.log(error));
*/

searchButton.addEventListener("click", fetchData);
searchInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        fetchData();
    }

})


async function fetchData() {
   

    try{
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${searchInput}&aqi=no`);
        if(!response.ok){
            throw new Error("Could not fetch resource")
        }

        const data = await response.json();
        console.log(data);

        const weatherIcon = data.current.condition.icon;
        const tempIcon = data.current.temp_f;
        const cityName = data.location.name;
        const stateName = data.location.region;



        weatherImage.src = weatherIcon;
        weatherTemp.textContent = (`${tempIcon}° F`);
        city.textContent = (`${cityName}, ${stateName}`);
    }
    catch(error){
        console.error(error);
    }
    
}