import chai from "chai";
const expect = chai.expect;
import travelerData from "../src/data/travelerData.js";
import Traveler from "../src/Traveler.js";
import Session from "../src/Session.js";

describe("See if the tests are running", function () {
//   let travelerData1;
  let traveler1;
  let traveler2;
  let traveler3;

  this.beforeEach(() => {
    traveler1 = new Traveler(travelerData);
    traveler2 = new Traveler(travelerData[1]);
    traveler3 = new Traveler(travelerData[0]);
  });

  it("should be a function", function () {
    expect(Traveler).to.be.a("function");
  });

  it("should be an instance of Traveler", () => {
    expect(traveler1).to.be.an.instanceOf(Traveler);
  });

  it("should be able to return a traveler name", () => {
    expect(traveler2.travelerName()).to.equal('Rachael Vaughten')
  });

  it.skip('should be abe to get traveler data', () => {
    expect(traveler3.setTravelerData(travelerData, 'trips', 'userID')).to.equal()
  });

  it('should be able to get destination data', () => {
    expect(traveler3.setDestinationData(this.data).to.equal([{
        id: 1,
        userID: 44,
        destinationID: 49,
        travelers: 1,
        date: "2022/09/16",
        duration: 8,
        status: "approved",
        suggestedActivities: [ ]
        }]))
  })
});
