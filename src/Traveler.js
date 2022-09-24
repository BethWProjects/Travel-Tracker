class Traveler {
    constructor(data) {
this.id = data.id,
this.name = data.name,
this.travelerType = data.travelerType
}

travelerName() {
    return this.name;
}

setTravelerData(session, dataArray, property) {
    this[dataArray] = session.getAllTravelerData(this.id, property);
    console.log('session', session)
    console.log('dataArray', this[dataArray])
}


setDestinationData(dataArray) {
    this.destinations = dataArray.findTravelerDestinations(this.trips);
    console.log(dataArray)
}

findTotalTravelCost() {
  const todaysDate = new Date().toISOString().slice(0, 10).split('-').join('/');

  const pastTrips = this.trips.filter((trip) => trip.date > '2022/01/01').map(trip => trip.destinationID)
 

  const totalCost = this.destinations.reduce((acc, destination) => {
    if (pastTrips.includes(destination.id)) {
        const pastTrips = this.trips.find(trip => trip.destinationID === destination.id) 
        // console.log('pastTrips', pastTrips)
        const flightCosts = pastTrips.travelers * destination.estimatedFlightCostPerPerson
        // console.log('flightCosts', flightCosts)
        const lodgingCosts = pastTrips.duration * destination.estimatedLodgingCostPerDay
        // console.log('lodgingCosts', lodgingCosts)
        acc += flightCosts + lodgingCosts
        // console.log('acc', acc)
        
    } 
    return acc
  }, 0)
  const fee = totalCost * .10
//   console.log(fee)
  const total = fee + totalCost
//   console.log(total)
  return `Total Cost Spent This Year $${total.toFixed(2)}`
}

}

export default Traveler