const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displaycountries(data));
}
loadCountries();

const displaycountries = counties => {
    // for(const country of countries){
        // console.log(counties);
    // // }
    const countriesDiv = document.getElementById('countries');
    counties.forEach(country => {
 
    const div = document.createElement('div');
    div.classList.add('country')
    div.innerHTML = `
    <h3>${country.name.common}</h3>
    <p>${country.capital}</p>
    <button onclick="loadCountryByName('${country.name.common}')">Details</button>
    `;
    countriesDiv.appendChild(div);    
    
    });
}
const loadCountryByName = name => {
    const url = `
    https://restcountries.com/v2/name/${name}`
    fetch(url)
    .then(res => res.json)
    .then(data => displaCountryDetail(data[0]));
    // console.log(url);
}

const displaCountryDetail = country => {
   
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
    <h5>${country.name}</h5>
    <p>population : ${country.population}</p>
    <img width="200px" src = "${country.flag}">

    `
    console.log(country);
}