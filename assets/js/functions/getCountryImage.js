let body = document.querySelector('body');

export const setCountryImage = countryName => {
  fetch(`https://api.unsplash.com/search/photos?page=1&query=${countryName}`, {
    headers: {
      Authorization: 'Client-ID U7ST6T1J9DI5XAIxspN1RDPlTQbGIAC4KzzmKg70je4',
    },
  })
    .then(response => response.json())
    .then(data => {
      let randomNumber = Math.floor(Math.random() * 9);
      let image = data.results[randomNumber].urls.regular;
      body.style.backgroundImage = 'url(' + image + ')';
    });
};
