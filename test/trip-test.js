import chai from "chai";
const expect = chai.expect;
import tripsData from "../src/data/tripsData.js";
import destinationData from "../src/data/destinationsData.js";
import Trip from "../src/Session.js";

describe("See if the tests are running", function () {
  let trip1;
  let allTrips;
  let tripDestinations;

  beforeEach(() => {
      trip1 = new Trip(tripsData[0]);
      allTrips = new Trip(tripsData);
     // tripDestinations = new Trip(tripsData, destinationData);
    
  });

  it.skip("should be a function", function () {
    expect(Trip).to.be.a("function");
  });

  it.skip("should be an instance of Traveler", () => {
    expect(trip1).to.be.an.instanceOf(Trip);
  });

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

  it.skip("should be able to find all of a users trips by id", () => {
   console.log('console', allTrips.getAllTravelerTripsById(21))
    expect(allTrips.getAllTravelerTripsById(21).length).to.equal(4);
  });

  it.skip('should be able to find all of the users destinations by id', () => {
    console.log(tripDestinations.getUserDestination(21))
    expect(tripDestinations.getUserDestination(21)).to.equal(4);
  });

});
