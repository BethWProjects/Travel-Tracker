import { fetchData } from './apiCalls';
import Trip from './Trip.js';
import Traveler from './Traveler.js'

//querySelectors
let name = document.querySelector('.name');
let pastTrips = document.querySelector('.pastTrips')
let articleCards = document.querySelector('.articles')
let totalCost = document.querySelector('.total-cost')
let dropdownSelection = document.querySelector('#dropdownSelection')
let tripButton = document.querySelector('#submitTrip')


let randomTraveler;

function getData() {
  Promise.all([fetchData("travelers"),fetchData("trips"),fetchData("destinations"),])
  .then((value) => {
    console.log(value)
    traveler = value[0].travelers;
    trip = value[1].trips;
    destination = value[2].destinations;
    //session = new Session(bookingsData, roomsData, customersData);
    displayName();
  });
}
console.log(getData())

  //eventListeners
 
  
  function displayData() {
    displayName();
  }

  function displayName() {
    name.innerText = `${randomTraveler.travelerName()}`;
  }
  
  

  

 



 






// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file

import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/ocean.jpg'
import './images/plane.svg'


console.log('This is the JavaScript entry file - your code begins here.');
