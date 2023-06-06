import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

import  './assets/images/currency.png';

let api = `https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD`
const fromDropDown = document.querySelector('#from-currency-select');
const toDropDown = document.querySelector('#to-currency-select');