const countryName = new URLSearchParams(location.search).get('name');

const countryImage = document.querySelector('.country-details-container img')
const countryNameH2 = document.querySelector('.all-text-container h2');
const nativeName = document.querySelector('.native-name');
const population = document.querySelector('.population');
const region = document.querySelector('.region');
const subRegion = document.querySelector('.sub-region');
const capital = document.querySelector('.capital');
const topLevelDomain = document.querySelector('.top-level-domain')
const area = document.querySelector('.area');
const currency = document.querySelector('.currency');
const languages = document.querySelector('.language');
const borderContainer = document.querySelector('.border-container')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res) => res.json())
.then(([country]) => {
    // console.log(country);

    if(country.name.common === " ") {
        countryImage.src = country.flags.svg;
    } else {
        countryImage.src = country.flags.png;
    }
    countryNameH2.innerText = country.name.common;
    if(country.name.nativeName) {
        nativeName.innerText = Object.values(country.name.nativeName)[0].common;
    }
    population.innerText = country.population.toLocaleString('en-BD');
    region.innerText = country.region;
    if(country.subregion) {
        subRegion.innerText = country.subregion;
    }
    if(country.capital) {
        capital.innerText = country.capital;
    }
    topLevelDomain.innerText = country.tld;
    area.innerText = country.area.toLocaleString('en-BD');
    if(country.currencies) {
        currency.innerText = Object.values(country.currencies)[0].name;
    } 

    if(country.languages) {
        languages.innerText = Object.values(country.languages).join(', ');
    } 

    if(country.borders) {
        country.borders.forEach((border) => {
            fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then(([borderCountry]) => {
                console.log(borderCountry)

                const aButton = document.createElement('a');
                aButton.classList.add('border-btn');
                aButton.innerText = borderCountry.name.common;
                aButton.href = `country-details.html?name=${borderCountry.name.common}`
                borderContainer.append(aButton);

                
            })
        })
    }
})




