class Trip {
  constructor(tripsData, destinationsData) {
    this.tripsData = tripsData,
    this.destinationsData = destinationsData
    
  }


  getTrip = (travelerId) => this.tripsData.filter((trip) => trip.userID === travelerId);

  getDestinationData = (travelerId) => {
    let allTrips = this.getTrip(travelerId);
    let allDestinations = allTrips.reduce((acc, trip) => {
      this.destinationsData.forEach((destination) => {
      if (destination.id === trip.destinationID) {
      acc.push(destination);
      }
      });
      return acc;
    }, []);
    return allDestinations;
  };

 
  getPastTrips = (travelerId, currentDate) => {
    let trips = this.getTrip(travelerId);
    let year = currentDate.split('-')[0];
    let allDestinations = this.getDestinationData(travelerId);
    let getDates = trips.reduce((acc, trip) => {
      allDestinations.forEach((destination) => {
        if (trip.date.split('/').join('') < year.split("-").join('') && destination.id === trip.destinationID) {
          acc.push(`<br> ${trip.date}: ${destination.destination}`)
        }
      })
      return acc
    }, [])
      return getDates.length < 1 ? `No past trips` : getDates;
  }


  getUpcomingTrips = (travelerId, currentDate) => {
    let trips = this.getTrip(travelerId);
    let year = currentDate.split('-')[0];
    let getDates = trips.reduce((acc, trip) => {
      this.destinationsData.forEach((destination) => {
        if (trip.date.split('/').join('') >= year.split("-").join('') && destination.id === trip.destinationID) {
          acc.push(`<br> ${trip.date}: ${destination.destination} `)
        }
      })
      return acc
    }, [])
      return getDates.length < 1 ? `No upcoming trips` : getDates;
  }
 


  getPendingTrips = (travelerId, currentDate) => {
    let trips = this.getTrip(travelerId);
    let year = currentDate.split('-')[0];
    let getDates = trips.reduce((acc, trip) => {
      this.destinationsData.forEach((destination) => {
        if (trip.status === 'pending' && destination.id === trip.destinationID) {
          acc.push(`<br> ${trip.date}: ${destination.destination}`)
        }
      })
      return acc
    }, [])
      return getDates.length < 1 ? `No pending trips` : getDates;
  }


  getLodgingAndDurationCosts = (travelerId, currentDate) => {
    let trips = this.getTrip(travelerId);
    let year = currentDate.split("-")[0];
    let thisYearTrips = trips.filter((trip) => trip.date.split("/").includes(year));   
    let allDestinations = this.getDestinationData(travelerId);
    let lodgingAndDurationCosts = thisYearTrips.reduce((acc, trip) => {
      let getInfo = allDestinations.find((destination) => destination.id === trip.destinationID);
      let total = getInfo.estimatedLodgingCostPerDay * trip.duration;
      acc += total
      return acc
    }, 0)
    return lodgingAndDurationCosts
  } 

  getFlightAndTravelerCosts = (travelerId, currentDate) => {
    let trips = this.getTrip(travelerId);
    let year = currentDate.split("-")[0];
    let thisYearTrips = trips.filter((trip) => trip.date.split("/").includes(year));   
    let allDestinations = this.getDestinationData(travelerId);
    let flightAndTravelerCosts = thisYearTrips.reduce((acc, trip) => {
      let getInfo = allDestinations.find((destination) => destination.id === trip.destinationID);
      let total = getInfo.estimatedFlightCostPerPerson * trip.travelers;
      acc += total
      return acc
    }, 0)
    return flightAndTravelerCosts
  } 
  
  findTotalTravelCostsThisYear(travelerId, currentDate) {
    let flightCosts = this.getFlightAndTravelerCosts(travelerId, currentDate) * 1.1;
    let lodgingCosts = this.getLodgingAndDurationCosts(travelerId, currentDate) * 1.1;
    let total = flightCosts + lodgingCosts
    return `Total Yearly Cost: $${total.toFixed(2)}`
  }

  findEstimatedTotalCost(duration, numTravelers, location) {
    let estimatedTotal = this.destinationsData.find(dest => dest.destination === location)
    let total = ((estimatedTotal.estimatedLodgingCostPerDay * duration) + (estimatedTotal.estimatedFlightCostPerPerson * numTravelers)) * 1.1;
    return total.toFixed(2)
}
   findTripImage = (destination) => this.destinationsData.find((dest) => dest.destination === destination).image

   findTripName = (destination) => this.destinationsData.find((dest) => dest.destination === destination).destination

   findTripsLength = () => this.tripsData.map(trip => trip.id).length + 1

}


export default Trip;
