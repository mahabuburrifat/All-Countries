const cardContainer = document.querySelector('.card-container');
const filterRegion = document.querySelector('.filter-region');
const searchContainer = document.querySelector('.search-container input');

const darkMode = document.querySelector('.dark-mode');
const icon = document.querySelector('.moon');



let allCountriesData;

fetch ('https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,nativename,subregion,toplaveldomain,currencies,languages')
.then((res) => res.json())
.then((data) => {
    renderCountries(data);
    allCountriesData = data;
    // console.log(allCountriesData)
});



filterRegion.addEventListener('change', (e) => {

    fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
    .then((res) => res.json())
    .then(renderCountries)
})



searchContainer.addEventListener('input', (e) => {
    const filterCountries = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))

    if(filterCountries.length === 0) {
        cardContainer.innerHTML = `<h1>Not Found</h1>`;
        cardContainer.style.display = "flex";
        cardContainer.style.justifyContent = "center";
        cardContainer.style.alignItems = "center";
        return;
    }
        renderCountries(filterCountries)
})




function renderCountries (data) {
    //loop er aga card container empty kora;
    cardContainer.innerHTML = '';
    
    data.forEach((country) => {
        // console.log(country);

        const countryCard = document.createElement('a');
        countryCard.classList.add('country-card');
        countryCard.href =`/country-details.html?name=${country.name.common}`
        countryCard.innerHTML = `
            <img src="${country.flags.svg}" alt="">
             <div class="card-container-text">
                <h2 class="text-title">${country.name.common}</h2>
                <p><b>Population: </b>${country.population.toLocaleString('en-BD')}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital}</p> 
            </div>           
        `
        cardContainer.append(countryCard);
    })
}


darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    
    if(dark) {
        document.moon.classList.remove('fa-moon')
    }
})