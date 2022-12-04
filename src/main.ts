import './style.scss'
// keep the line above and write your code below.
const exchangeRateEndpoint = 'https://currency-ror1.vercel.app/api/currency';
const datesCurrenciesArrayEndpoint = 'https://currency-ror1.vercel.app/api/dates-table';

const currencyCodes = {
  USD: '01',
  EUR: '27',
  GBP: '02',
  CAD: '06',
  AUD: '18',
  GPY: '31',
};

/**
 * Use these strings in the form select (drop-down) -
 * you can copy-paste into the HTML
 * and/or use them programmatically
 */

const currencyNames = [
  'USD (United States Dollar)',
  'EUR (Euro)',
  'GBP (Great Britain Pound)',
  'CAD (Canadian Dollar)',
  'AUD (Australian Dollar)',
  'GPY (Japanese Yen)'
];

window.addEventListener('DOMContentLoaded', (event) => {
  attachListeners();
  return populateTable();
});


function attachListeners() {
  const currencyConverterForm = document.getElementById('currency-converter-form');
  currencyConverterForm.onsubmit = getExchangeRateFromForm;
}



/**
 * Complete the function below to get the exchange rate from the API
 */

async function getExchangeRateFromApi(dateCode: string, currencyCode: string) {


}


/**
 * Complete the function below to get the data from the form,
 * send it to the API, present the result, and show/hide the spinner.
 * The two event methods prevent the form submission from reloading the page.
 */

async function getExchangeRateFromForm(event) {
  event.preventDefault();
  event.stopPropagation();


}

/**
 * Complete the function below to get the array of dates and currencies,
 * create table rows, get the exchange rates from the API,
 * present the results, and show/hide the spinner
 */

async function populateTable() {



  return null;
}

// function sum (b: number, c: number, a?:number) {
//     return b+c+a
// }


// // function palindrom(string: string) : boolean {
// //     let newStr = string.split('').reverse().join('');
// //     if (string === newStr) {
// //         return true
// //     } else {
// //         return false;
// //     }
// // }

// // palindrom('madam');


// // let arr = [1,2,3];
// // arr.push(2);


// async function caller () {
//     callee();
//     return 'hello';
// }

// function callee () {
//     const myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//         resolve("resolved");
//         },Math.floor(Math.random()*5000));
//     });
        
// }

// caller();

// //   myPromise
// //   .then((value) => {
// //     console.log(value);
// //   })
// //   .catch((err) => {
// //     console.error(err);
// //   });