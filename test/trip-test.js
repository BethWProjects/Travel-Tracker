import chai from "chai";
const expect = chai.expect;
import tripsData from "../src/data/tripsData.js";
import destinationData from "../src/data/destinationsData.js";
import Trip from "../src/Trip.js";

describe("See if the tests are running", function () {
  let trip1;
  let allTrips;
  let tripDestinations;
  let allDestinations;

  beforeEach(() => {
      trip1 = new Trip(tripsData[0]);
      allTrips = new Trip(tripsData);
      allDestinations = new Trip(tripsData, destinationData);
     // tripDestinations = new Trip(tripsData, destinationData);
    
  });

  it("should be a function", function () {
    expect(Trip).to.be.a("function");
  });

  it("should be an instance of Traveler", () => {
    expect(trip1).to.be.an.instanceOf(Trip);
  });

  it('should be able to find a trip by matching traveler id to trip userID', () => {
    //this test is working on the getTrip function because we are passing in tripsData array above
    expect(allTrips.getTrip(2).length).to.deep.equal(6)
  })

  it('should be able to filter and find upcoming trips for userID 1', () => {
    expect(allTrips.getUpcomingTrips(24)).to.deep.equal([
      {
        id: 9,
        userID: 24,
        destinationID: 19,
        travelers: 5,
        date: '2022/12/19',
        duration: 19,
        status: 'approved',
        suggestedActivities: []
      }
    ])
  })

  it('should be able to filter and find upcoming trips for userID 1', () => {
    expect(allTrips.getPastTrips(44).length).to.deep.equal(9)
  })

  it('should be able to return pending trips for a user by their id', () => {
    expect(allTrips.getPendingTrips(38).length).to.equal(1)
  })

  it.skip('should be able to access the destination id by trip destination Id', () => {
    expect(allTrips.getDestinations(28).length).to.equal(4)
  })

  it('should be able to access destination data by tripDestinationIDs', () => {
    expect(allDestinations.getDestinationData(35)).to.deep.equal([
      {
        id: 25,
        destination: 'New York, New York',
        estimatedLodgingCostPerDay: 175,
        estimatedFlightCostPerPerson: 200,
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        alt: 'people crossing the street during the day surrounded by tall buildings and advertisements'
      }
    ])
  })

  it.skip("should have a property to hold all traveler data", () => {
    expect(trip1.tripsData).to.deep.equal( {
        id: 1,
        userID: 44,
        destinationID: 49,
        travelers: 1,
        date: "2022/09/16",
        duration: 8,
        status: "approved",
        suggestedActivities: [],
      });
  });

  it.skip('should be able to find all of the users destinations by id', () => {
    console.log(tripDestinations.getUserDestination(21))
    expect(tripDestinations.getUserDestination(21)).to.equal(4);
  });

});
