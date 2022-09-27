
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
let tripEstimate = document.querySelector('.estimate-display')
let cardParagraph = document.querySelector('.date')
let username = document.querySelector("#userName")
let password = document.querySelector("#password")
let loginError = document.querySelector(".error-message-login")
let loginSection = document.querySelector(".log-in-container")
let mainSection = document.querySelector('.main-section')
let navSection = document.querySelector(".all-nav")
let formError = document.querySelector(".form-error")

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
    trips = value[1].trips;
    destination1 = value[2].destinations;
    trip = new Trip(trips, destination1)
    singleTraveler = new Traveler(value[0]);
    currentDate = new Date().toJSON().slice(0, 10);

    welcomeUser()
    showDestinationDropdownSelections()
   
  });
}

mainSection.addEventListener('click', handleButtons)
loginSection.addEventListener('click', handleButtons)

function handleButtons(event) {
  switch (event.target.className) {
    case "find-estimate-btn":
      showEstimatedTripCost()
      break;
    case "submit-booking-btn":
      postBooking()
      break;
    case "submit-login":
      verifyLogin()
      break;
    default:
      break;
  }
};


function showMainSection() {
  mainSection.classList.remove("hidden")
  navSection.classList.remove("hidden")
  loginSection.classList.add("hidden");
}


function verifyLogin(event) {
  let userID = parseInt(username.value.slice(8));
  if (username.value === "" || password.value === "") {
    loginError.innerText = `PLEASE SUBMIT BOTH USERNAME AND PASSWORD!`;
  } else if (password.value !== "travel") {
    loginError.innerText = `INCORRECT PASSWORD!`;
  } else if (!username.value.includes("traveler")) {
    loginError.innerText = `USERNAME DOES NOT EXIST! PLEASE TRY AGAIN.`;
  } else if (userID > 50) {
    loginError.innerText = "THE USER DOES NOT EXIST!";
  } else {
    loginError.innerText = '';
    getData(userID);
    showMainSection()
  }
}

const welcomeUser = () => {
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

const showEstimatedTripCost = () => {
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
              travelers: parseInt(numTravelers.value),
              date: newDate,
              duration: parseInt(durationAmt.value),
              status: "pending",
              suggestedActivities: [ ]
          }),
      })
      .then((response) => {
          if (!response.ok) {
            throw new Error(
              "There was an error adding your Trip Data, please retry later"
            );
          } else {
            return response.json();
            
          }
        })
        .then((data) => {
          articleCards.innerHTML = ''
          trip.tripsData = [...trip.tripsData, data.newTrip]
          displayTotalCost()
          displayDestinationTripCards()
        })
        .catch((err) => {
          postErrorMessage.innerText = 'Error updating data, please update fields or retry later'
        });
  }



// import css

import './css/styles.css';

// import images
import './images/turing-logo.png'
import './images/ocean.jpg'
import './images/plane.svg'



