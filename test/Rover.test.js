const Rover = require("../classes/Rover");

test("should return the current location and heading of the rover instance", () => {
  const currentLocation = [0, 0];
  const currentHeading = "N";
  const plateauSize = [5, 5];
  const rover = new Rover(currentLocation, currentHeading, plateauSize);
  expect(rover.currentLocation).toBe(currentLocation);
  expect(rover.currentHeading).toBe(currentHeading);
});

test("should indicate the rover is out of plateau's limits", () => {
  const currentLocation = [5, 5];
  const currentHeading = "N";
  const plateauSize = [4, 4];
  const rover = new Rover(currentLocation, currentHeading, plateauSize);
  expect(rover.currentHeading).toBe(undefined);
  expect(rover.currentLocation).toBe(undefined);
});
