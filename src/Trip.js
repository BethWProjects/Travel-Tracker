class Trip {
    constructor(tripsData, destinationsData){
        this.tripsData = tripsData;
        this.destinationsData = destinationsData;
    }
    getAllTravelerTrips = (id) => this.tripsData.filter((trip) => trip.userID === id);
  
    // totalAmountOnTripsThisYear = (id) => {
    //     let travelerTrip = this.getAllTravelerTrips(id);

    // }
}



export default Trip