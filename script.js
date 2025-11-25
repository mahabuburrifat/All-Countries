const cardContainer = document.querySelector('.card-container');

fetch ('https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population').then((res) => res.json())
.then((data) => {
    data.forEach((country) => {
        console.log(country);
        const countryCard = document.createElement('a');
        countryCard.classList.add('country-card');
        countryCard.innerHTML = `
            <img src="${country.flags.svg}" alt="">
             <div class="card-container-text">
                <h1 class="text-title">${country.name.common}</h1>
                <p><b>Population: </b>${country.population.toLocaleString('en-BD')}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital}</p> 
            </div>           
        `
        cardContainer.append(countryCard);
    })
})




