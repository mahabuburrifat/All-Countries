fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,nativename,subregion,toplaveldomain,currencies,languages')
.then((res) => res.json())
.then((data) => {
    data.forEach((country) => {
        console.log(country)
    })
})