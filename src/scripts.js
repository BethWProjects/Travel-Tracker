import { fetchData } from './apiCalls';

let traveler;
let trip;
let destination;

function getData() {
    Promise.all([fetchData("travelers"),fetchData("trips"),fetchData("destinations"),])
    .then((value) => {
      console.log(value)
      traveler = value[0].travelers;
      trip = value[1].trips;
      destination = value[2].destinations;
      //session = new Session(bookingsData, roomsData, customersData);
    });
  }
  console.log(getData())
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file

import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/ocean.jpg'


console.log('This is the JavaScript entry file - your code begins here.');
