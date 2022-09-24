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

let travelerTrip;
let tripTrip;
let destinationTrip;
let randomTraveler;

    Promise.all([fetchData("travelers"),fetchData("trips"),fetchData("destinations"),])
    .then((data) => {
      setData(data)
    });
  

  function setData(data) {
    travelerTrip = new Trip(data[0].travelers);
    tripTrip = new Trip(data[1].trips);
    destinationTrip = new Trip(data[2].destinations);
    randomTraveler = getRandomTraveler(travelerTrip.data);
    randomTraveler.setTravelerData(tripTrip, 'trips', 'userID');
    randomTraveler.setDestinationData(destinationTrip);
    //console.log(randomTraveler.destinations.map(dest => dest.estimatedLodgingCostPerDay))
    console.log(randomTraveler)
    displayData()
  }

  //eventListeners
  //tripButton.addEventListener('click', verifyInput)
  tripButton.addEventListener('click', retrieveTripData)
 

  function getRandomTraveler() {
    const travelerId = Math.floor(Math.random() * 49) + 1;
    const randomTravelerData = travelerTrip.getAllTravelerData(travelerId, 'id');
    return new Traveler(randomTravelerData[0]);
  }
  
  function displayData() {
    displayName();
    displayUserDestinations();
    randomTraveler.findTotalTravelCost()
    displayTotalCost()
    dropdownDestinationSelection()

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

 function dropdownDestinationSelection() {
  let destinationName = destinationTrip.findDestinations(destinationTrip)
  destinationName.forEach(destination => {
    dropdownSelection.innerHTML += ` <option class="destinations" value="${destination}">${destination}`
  })
 }



 function retrieveTripData(event) {
  event.preventDefault(event)
  let destination = dropdownSelection.value 
  let destID = destinationTrip.data.find(dest => dest.destination === destination)
  let findID = tripTrip.data.map(trip => trip.id)
  let newID = findID.length + 1
  console.log(destination)

  const tripData = {
    id: newID,
    userID: randomTraveler.id,
    destinationID: destID.id,
    travelers: parseInt(numTravelers.value), 
    date: dateInput.value,
    duration: parseInt(durationAmt.value),
    status: 'pending',
    suggestedActivities: [] 
  }
  console.log(tripData)
  // console.log(tripTrip.data.length,)
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
