import chai from "chai";
const expect = chai.expect;
import travelerData from "../src/data/travelerData.js";
import Traveler from "../src/Traveler.js";

describe("See if the tests are running", function () {
//   let travelerData1;
  let traveler1;
  let traveler2;
  let traveler3;

  this.beforeEach(() => {
    traveler1 = new Traveler(travelerData[0]);
    traveler2 = new Traveler(travelerData[1]);
    traveler3 = new Traveler(travelerData[2]);
  });

  it("should be a function", function () {
    expect(Traveler).to.be.a("function");
  });

  it("should be an instance of Traveler", () => {
    expect(traveler1).to.be.an.instanceOf(Traveler);
  })

  it("should be able to determine a traveler id", () => {
    expect(traveler1).to.deep.equal({
        id: 1,
        name: "Ham Leadbeater",
        travelerType: "relaxer"
        });
  })
});
