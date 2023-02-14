const apiKey = '72d0f4935ca62bd9862c628eb70107b3';

export const getTemperature = CountryTemperature => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${CountryTemperature}&units=metric&appid=${apiKey}&lang=pt_br`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      result.innerHTML = `<div class="content">
                  <div class="data-content">
                    <h4>Temperatura:  <span>${parseInt(
      data.main.temp
    )}</span>°C</h4>                      
                  </div>`;
    });
};
