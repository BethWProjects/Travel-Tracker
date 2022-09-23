import chai from "chai";
const expect = chai.expect;
import tripsData from "../src/data/tripsData.js";
//import destinationData from "../src/data/destinationsData.js";
import Trip from "../src/Trip.js";

describe("See if the tests are running", function () {
  let tripsData1;
  let trip1;
//   let destinationData1;

  beforeEach(() => {
    tripsData1 = [
        {
          id: 22,
          userID: 22,
          destinationID: 9,
          travelers: 4,
          date: '2022/05/01',
          duration: 19,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 86,
          userID: 22,
          destinationID: 46,
          travelers: 4,
          date: '2020/10/31',
          duration: 17,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 113,
          userID: 22,
          destinationID: 6,
          travelers: 3,
          date: '2019/08/14',
          duration: 15,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 195,
          userID: 22,
          destinationID: 17,
          travelers: 3,
          date: '2019/09/12',
          duration: 17,
          status: 'approved',
          suggestedActivities: []
        }
      ];
      trip1 = new Trip(tripsData1);

    //   destinationData1 = [
    //     {
    //         id: 6,
    //         destination: "Jakarta, Indonesia",
    //         estimatedLodgingCostPerDay: 70,
    //         estimatedFlightCostPerPerson: 890,
    //         image:
    //           "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    //         alt: "lit up city at night",
    //       }
    //   ]
      
  });

  it("should be a function", function () {
    expect(Trip).to.be.a("function");
  });

  it("should be an instance of Traveler", () => {
    expect(trip1).to.be.an.instanceOf(Trip);
  });

  it("should have a property to hold all traveler data", () => {
    expect(trip1.tripsData).to.deep.equal(tripsData1)
  });

  it("should be able to find all of a users trips by id", () => {
   console.log('console', trip1.getAllTravelerTrips(22))
    expect(trip1.getAllTravelerTrips(22)).to.deep.equal(tripsData1)
  });

});
