import { getCountry } from './functions/getCountry.js';
import { setCountryImage } from './functions/getCountryImage.js';
import { getTemperature } from './functions/getTemperature.js';

let searchBtn = document.getElementById('search-btn');
let countryInp = document.getElementById('country-inp');

countryInp.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    searchCountry();
  }
});
searchBtn.addEventListener('click', () => {
  searchCountry();
});
function searchCountry() {
  let countryValue = countryInp.value;
  getCountry(countryValue);
  setCountryImage(countryValue);
  getTemperature(countryValue);
}
