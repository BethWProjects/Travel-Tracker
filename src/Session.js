class Session {
  constructor(data) {
    this.data = data;
  }

  getAllTravelerData(id, property) {
    return this.data.filter((allData) => allData[property] === id);
  }

  findTravelerDestinations(destinations) {
    const tripDestinationIDs = destinations.map((trip) => trip.destinationID);
    console.log('destinations', destinations)

    return this.data.reduce((acc, destination) => {
      if (tripDestinationIDs.includes(destination.id)) {
        acc.push(destination);
      }
      return acc;
    }, []);
  }
}

export default Session;
