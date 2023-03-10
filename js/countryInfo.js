let searchBtn = document.getElementById("search__btn");
let countryIn = document.getElementById("country__input");

searchBtn.addEventListener("click", ()=> {
    let countryName = countryIn.value;
    if(countryName.endsWith(" ") || countryName.endsWith(".")){
        countryName =  countryName.slice(0, -1);
    }
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(finalURL).then((response) => response.json()).then((data) => {
        //console.log(Object.values(data[0].languages).toString.split(",").join(", "));


        result.innerHTML = `<img src="${data[0].flags.svg}" class= "flag__img"> 
        <h2> ${data[0].name.common}</h2>
        <div class= "wrapper"> 
            <div class= "data__wrapper"> 
                <h4>Capital: </h4>
                <span> ${data[0].capital[0]}</span>
            </div>
        </div>
        <div class= "wrapper"> 
            <div class= "data__wrapper"> 
                <h4>Capital: </h4>
                <span> ${data[0].continents[0]}</span>
            </div>
        </div>

        <div class= "wrapper"> 
            <div class= "data__wrapper"> 
                <h4>Population: </h4>
                <span> ${data[0].population}</span>
            </div>
        </div>

        <div class= "wrapper"> 
            <div class= "data__wrapper"> 
                <h4>Currency: </h4>
                <span> ${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>

        <div class= "wrapper"> 
            <div class= "data__wrapper"> 
                <h4>Common Languages: </h4>
                <span> ${Object.values(data[0].languages).toString().split(",").join(", ")} </span>
            </div>
        </div>
        `;
    }).catch(() => {
        if (countryName.length == 0){
            result.innerHTML = `<h3> The input field cannot be empty! </h3>`;
        }
        else {
            result.innerHTML = `<h3> Please enter a valid country name. </h3>`;
        }
    });
});