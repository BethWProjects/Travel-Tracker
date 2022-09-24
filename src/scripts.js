import { fetchData } from './apiCalls';
import Session from './Session.js';
import Traveler from './Traveler.js'

//querySelectors
let name = document.querySelector('.name');
let pastTrips = document.querySelector('.pastTrips')
let articleCards = document.querySelector('.articles')
let totalCost = document.querySelector('.total-cost')

let travelerSession;
let tripSession;
let destinationSession;
let randomTraveler;

    Promise.all([fetchData("travelers"),fetchData("trips"),fetchData("destinations"),])
    .then((data) => {
      setData(data)
    });
  

  function setData(data) {
    travelerSession = new Session(data[0].travelers);
    tripSession = new Session(data[1].trips);
    destinationSession = new Session(data[2].destinations);
    randomTraveler = getRandomTraveler(travelerSession.data);
    randomTraveler.setTravelerData(tripSession, 'trips', 'userID');
    randomTraveler.setDestinationData(destinationSession);
    //console.log(randomTraveler.destinations.map(dest => dest.estimatedLodgingCostPerDay))
    console.log(randomTraveler)
    displayData()
  }

  function getRandomTraveler(users) {
    const randomIndex = Math.floor(Math.random() * users.length);
    const randomTravelerData = travelerSession.getAllTravelerData(randomIndex, 'id');
    return new Traveler(randomTravelerData[0]);
  }
  
  function displayData() {
    displayName();
    displayUserDestinations();
    randomTraveler.findTotalTravelCost()
    displayTotalCost()

  }

  function displayName() {
    name.innerText = `${randomTraveler.travelerName()}`;
  }
  
  function displayUserDestinations() {
    const todaysDate = new Date().toISOString().slice(0, 10).split('-').join('/')
    console.log(todaysDate)

    randomTraveler.trips.forEach(trip => {
      const travelerDestination = randomTraveler.destinations.find(destination => trip.destinationID === destination.id)
     if (trip.status === 'pending') {
      displayDestinationTripCards(travelerDestination, trip, 'Pending')
    } else if (trip.date < todaysDate) {
        displayDestinationTripCards(travelerDestination, trip, "Past")
      } else {
        displayDestinationTripCards(travelerDestination, trip, "Upcoming")
      }
    })
  }

  function displayDestinationTripCards(travelerDestination, trip, status) {
    articleCards.innerHTML += ` <article class="article">
    <img class="destination-image" src="${travelerDestination.image}" alt="">
    <p class="destination-name">${travelerDestination.destination}</p>
    <p class="date">${trip.date}</p>
    <p class="past">${status}</p>
  </article>`
  }

  function displayTotalCost() {
    totalCost.innerText = randomTraveler.findTotalTravelCost()
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
