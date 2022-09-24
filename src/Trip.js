class Trip {
  constructor(tripsData, destinationsData) {
    this.tripsData = tripsData,
    this.destinationsData = destinationsData
  }


  getTrip = (travelerId) => this.tripsData.filter((trip) => trip.userID === travelerId);

  getDestinations = (destId) => this.tripsData.filter((trip) => trip.destinationID === destId)

  getUpcomingTrips = (id) => {
    let todaysDate = new Date().toISOString().slice(0, 10).split('-').join('/')
    let trips = this.getTrip(id)
    const upcomingTrips = trips.filter(trip => trip.date > todaysDate)
    return upcomingTrips
  }

  getPastTrips = (id) => {
    let todaysDate = new Date().toISOString().slice(0, 10).split('-').join('/')
    let trips = this.getTrip(id)
    const pastTrips = trips.filter(trip => trip.date < todaysDate)
    return pastTrips
  }

  getPendingTrips = (id) => {
    let trips = this.getTrip(id)
    const pendingTrips = trips.filter(trip => trip.status === 'pending')
    return pendingTrips
  }

  // getTotalAmountSpentThisYear = (id) => {
  //   let trips = this.getTrip(id)
  // }

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
}

export default Trip;
