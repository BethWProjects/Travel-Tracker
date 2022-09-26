
import { fetchData, fetchSingleTraveler } from './apiCalls'
import Trip from './Trip.js';
import Traveler from './Traveler.js'


//querySelectors
let name = document.querySelector('.name');
let articleCards = document.querySelector('.articles');
let totalCost = document.querySelector('.total-cost');
let dateInput = document.querySelector('#dateInput');
let durationAmt = document.querySelector('.duration-amount');
let numTravelers = document.querySelector('#numTravelers');
let dropdownSelection = document.querySelector('.data-entry-type-selection');
let inputSection = document.querySelector('input-section')
let tripButton = document.querySelector('#submitTrip');
let mainSection = document.querySelector('.main-section')
let tripEstimate = document.querySelector('.estimate-display')
let cardParagraph = document.querySelector('.date')

//global variables
let travelers;
let trips;
let destination1;
let trip;
let singleTraveler;
let currentDate;

function getData(id) {
  Promise.all([fetchSingleTraveler(id),fetchData("trips"),fetchData("destinations"),])
  .then((value) => {
  //  console.log(value)
    //travelers = value[0];
    trips = value[1].trips;
    destination1 = value[2].destinations;
    trip = new Trip(trips, destination1)
    singleTraveler = new Traveler(value[0]);
    currentDate = new Date().toJSON().slice(0, 10);

    welcomeUser()
    showDestinationDropdownSelections()
   
  });
}

window.addEventListener('load', () => {
  getData(44)
}); 


mainSection.addEventListener('click', handleButtons)

function handleButtons(event) {
  switch (event.target.className) {
    case "find-estimate-btn":
      showEstimatedTripCost()
      break;
    case "submit-booking-btn":
      postBooking()
      break;
    // case "":
    
    //   break;
    // case "":
  
    //   break;
    //   case "":

    //       break;
    default:
      break;
  }
};

const welcomeUser = () => {
 // console.log('singleTraveler', singleTraveler)
 
  displayName()
  displayTotalCost()
  displayDestinationTripCards()
 
  
};

  function displayName() {
    name.innerText = `Welcome! \u00a0 ${singleTraveler.travelerName()}`;
  }

  function displayTotalCost() {
    totalCost.innerText = `${trip.findTotalTravelCostsThisYear(singleTraveler.id, currentDate)}`
  }
  
   
 function displayDestinationTripCards() {
  articleCards.innerHTML = ''
  articleCards.innerHTML += ` <article class="article">
  <p class="destination-name">${singleTraveler.travelerName().split(' ').splice(0, 1)}'s Past Trips</p>
  <p class="date">${trip.getPastTrips(singleTraveler.id, currentDate)}</p>
  <p class="past"></p>
</article>
<article class="article">
  <p class="destination-name">${singleTraveler.travelerName().split(' ').splice(0, 1)}'s Pending Trips</p>
  <p class="date">${trip.getPendingTrips(singleTraveler.id, currentDate)}</p>
  <p class="past"></p>
</article>
<article class="article">
  <p class="destination-name">${singleTraveler.travelerName().split(' ').splice(0, 1)}'s Upcoming Trips</p>
  <p class="date">${trip.getUpcomingTrips(singleTraveler.id, currentDate)}</p>
  <p class="past"></p>
</article>
`

}

function showDestinationDropdownSelections() {
let dropdownIteration = destination1.map(dest => `<option>${dest.destination}</option>`)
  dropdownSelection.innerHTML = ` <label for="data-location-slection">Select Data Type:</label>
<select id="dropdownSelection" name="data-type-selection" class="data-entry-type-selection" required>
${dropdownIteration.sort()}
</select> ` 

}

function showEstimatedTripCost() {
  tripEstimate.innerHTML = ''
  tripEstimate.innerHTML = `
  <p>Estimated Total Cost for Trip:</p>
  <p>$${trip.findEstimatedTotalCost(durationAmt.value, numTravelers.value, dropdownSelection.value)}</p>
  <p>Trip Date: ${dateInput.value}</p>
  <p>${trip.findTripName(dropdownSelection.value)}</p>
  <img src="${trip.findTripImage(dropdownSelection.value)}" alt="">
  `
}  


const postBooking = (event) => {
  let tripID = trip.findTripsLength()
  let destID = trip.destinationsData.find(dest => dest.destination === dropdownSelection.value).id;
  let newDate = dateInput.value.split("-").join("/");
      
      fetch("http://localhost:3001/api/v1/trips", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              id: tripID,
              userID: singleTraveler.id,
              destinationID: destID,
              travelers: numTravelers.value,
              date: newDate,
              duration: durationAmt.value,
              status: "pending",
              suggestedActivities: [ ]
          }),
      })
      .then((response) => {
          if (!response.ok) {
            throw new Error(
              "There was an error adding your Activity Data, please retry later"
            );
          } else {
            return response.json();
          }
        })
        .then((data) => {
          // fetchData("trips")
          // .then(data => console.log(data))
          articleCards.innerHTML = ''
          trip.tripsData = [...trip.tripsData, data.newTrip]
          displayTotalCost()
          displayDestinationTripCards()
        })
        .catch((err) => {
          postErrorMessage.innerText = 'Error updating data, please retry later'
        });
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
