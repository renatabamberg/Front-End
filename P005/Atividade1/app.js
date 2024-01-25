const myMap = L.map('map').setView([51.505, -0.09], 2);
let countryData;

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(myMap);

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countriesData => {
    countryData = countriesData;
    const selectElement = document.getElementById('paises');
    countryData.forEach(country => {
      const optionElement = document.createElement('option');
      optionElement.value = country.name.common;
      optionElement.textContent = country.name.common;
      selectElement.appendChild(optionElement);
    });
  })
  .catch(error => {
    console.error('Erro:', error);
  });

function updateMapCountry() {
  const selectElement = document.getElementById('paises');
  const selectedCountry = selectElement.value;
  const selectedCountryData = countryData.find(country => country.name.common === selectedCountry);
  if (selectedCountryData) {
    const latLong = [selectedCountryData.latlng[0], selectedCountryData.latlng[1]];
    myMap.setView(latLong, 8);
  }
}

const selectElement = document.getElementById('paises');
selectElement.addEventListener('change', updateMapCountry);

let defaultLatLong = [-14.794851092521004, -39.25978803993592];
myMap.setView(defaultLatLong, 8);