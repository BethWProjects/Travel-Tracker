class Trip {
  constructor(tripsData, destinationsData) {
    this.tripsData = tripsData,
    this.destinationsData = destinationsData
  }


  getTrip = (travelerId) => this.tripsData.filter((trip) => trip.userID === travelerId);


  getUpcomingTrips = (travelerId) => {
    let todaysDate = new Date().toISOString().slice(0, 10).split('-').join('/')
    let trips = this.getTrip(travelerId)
    const upcomingTrips = trips.filter(trip => trip.date > todaysDate)
    return upcomingTrips
  }

  getPastTrips = (travelerId) => {
    let todaysDate = new Date().toISOString().slice(0, 10).split('-').join('/')
    let trips = this.getTrip(travelerId)
    const pastTrips = trips.filter(trip => trip.date < todaysDate)
    return pastTrips
  }

  getPendingTrips = (travelerId) => {
    let trips = this.getTrip(travelerId)
    const pendingTrips = trips.filter(trip => trip.status === 'pending')
    return pendingTrips
  }

  getThisYearsTrips = (travelerId) => {
    //add to README to find better way to hanlde dates, instead of hardcoding
    let trips = this.getTrip(travelerId)
    const thisYearTrips = trips.filter(trip => trip.date > '2021/12/31')
    return thisYearTrips
  }

  getDestinationData = (travelerId) => {
    let trips = this.getTrip(travelerId)
    let tripDestinationIDs = trips.map((trip) => trip.destinationID);
      return this.destinationsData.reduce((acc, destination) => {
        if (tripDestinationIDs.includes(destination.id)) {
          acc.push(destination);
        }
        return acc
      }, []);
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
  
}

  //   getAllTravelerData(travelerId, id) {
  //   return this.data.filter((allData) => allData[id] === travelerId);
  // }

  // findTravelerDestinations(destinations) {
  //   const tripDestinationIDs = destinations.map((trip) => trip.destinationID);
  //   console.log('destinations', destinations)

  //   return this.data.reduce((acc, destination) => {
  //     if (tripDestinationIDs.includes(destination.id)) {
  //       acc.push(destination);
  //     }
  //     return acc;
  //   }, []);
  // }

  // findDestinations(destinationRepo) {
  //   return destinationRepo.data
  //   .map(destination => destination.destination)
  //   .sort()
  // }



export default Trip;
