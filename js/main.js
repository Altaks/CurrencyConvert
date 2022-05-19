// api key = f47ba4dffba7bea0f2c859a1971e10c3f0bc4255

const firstInput = document.getElementById("first-input");
const secondInput = document.getElementById("second-input");

const firstCurrencySelector = document.getElementById("first-currency");
const secondCurrencySelector = document.getElementById("second-currency");

// query all the currencies that exists currently

fetch("https://api.getgeoapi.com/v2/currency/list" +
    "?api_key=f47ba4dffba7bea0f2c859a1971e10c3f0bc4255" +
    "&format=json")
    .then(response => response.json())
    .then(results => {
        for(let elem in results.currencies){
            let option = document.createElement("option");
            option.value = elem;
            option.innerText = elem;
            firstCurrencySelector.appendChild(option);
            secondCurrencySelector.appendChild(option.cloneNode(true));
        }
    })
    .then(data => console.log(data));

// add auto convert from first currency to second currency, by checking the selected currency on the second input
firstInput.addEventListener('input', function(event) {

    let firstCurrency = firstCurrencySelector.value;
    let secondCurrency = secondCurrencySelector.value;

    let firstValue = firstInput.value;

    if(firstValue === ""){
        secondInput.value = "";
    } else {
        fetch("https://api.getgeoapi.com/v2/currency/convert" +
            "?api_key=f47ba4dffba7bea0f2c859a1971e10c3f0bc4255" +
            "&from=" + firstCurrency +
            "&to=" + secondCurrency +
            "&amount=" + firstValue +
            "&format=json")
            .then(response => response.json())
            .then(results => {
                secondInput.value = results.rates[secondCurrency].rate_for_amount;
            })
            .then(data => console.log(data));
    }
});

secondInput.addEventListener('input', function(event) {

    let firstCurrency = firstCurrencySelector.value;
    let secondCurrency = secondCurrencySelector.value;

    let secondValue = secondInput.value;

    if(secondValue === ""){
        firstInput.value = "";
    } else {
        fetch("https://api.getgeoapi.com/v2/currency/convert" +
            "?api_key=f47ba4dffba7bea0f2c859a1971e10c3f0bc4255" +
            "&from=" + secondCurrency +
            "&to=" + firstCurrency +
            "&amount=" + secondValue +
            "&format=json")
            .then(response => response.json())
            .then(results => {
                firstInput.value = results.rates[secondCurrency].rate_for_amount;
            })
            .then(data => console.log(data));
    }
});