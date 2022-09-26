import Trip from "./Trip";

class Traveler {
    constructor(data) {
this.id = data.id,
this.name = data.name,
this.travelerType = data.travelerType
}

travelerName() {
    return this.name;
}

travelersTrips(trips, dest) {
    let trip = new Trip(trips, dest)
    console.log('trip', trip)
    this.id = trips.tripsData.destinationID === dest.destinationsData.id
   
   return trip
}


}

export default Traveler