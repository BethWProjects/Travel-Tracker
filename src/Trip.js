class Trip {
  constructor(tripsData, destinationsData) {
    this.tripsData = tripsData,
    this.destinationsData = destinationsData
  }


  getTrip = (travelerId) => this.tripsData.filter((trip) => trip.userID === travelerId);

  //getDestinations = (destId) => this.destinationData.filter((trip) => trip.destinationID === destId)

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

  getDestinationData = (travelerId) => {
    let trips = this.getTrip(travelerId)
    const tripDestinationIDs = trips.map((trip) => trip.destinationID);
      return this.destinationsData.reduce((acc, destination) => {
        if (tripDestinationIDs.includes(destination.id)) {
          acc.push(destination);
        }
        return acc
      }, []);
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
