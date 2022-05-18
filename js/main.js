// api key = cwyl15j9vpMuRrGWJcH4uZT83XJS6r9N

const firstInput = document.getElementById("first-input");
const secondInput = document.getElementById("second-input");

const firstCurrencySelector = document.getElementById("first-currency");
const secondCurrencySelector = document.getElementById("second-currency");

// query all the currencies that exists currently

var headers = new Headers();
headers.append('apikey', 'cwyl15j9vpMuRrGWJcH4uZT83XJS6r9N');

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: headers
}

fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
    .then(response => response.json())
    .then(result => {
        for(let currency in result.symbols){
            var opt = document.createElement('option');
            opt.value = currency;
            opt.innerHTML = currency;
            firstCurrencySelector.appendChild(opt);
            secondCurrencySelector.appendChild(opt.cloneNode(true));
        }
    })
    .catch(error => console.log('error', error));

