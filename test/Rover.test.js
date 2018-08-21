const Rover = require("../classes/Rover");

test("should return the current location and heading of the rover instance", () => {
  const currentLocation = [0, 0];
  const currentHeading = "N";
  const rover = new Rover(currentLocation, currentHeading);
  expect(rover.currentLocation).toBe(currentLocation);
  expect(rover.currentHeading).toBe(currentHeading);
});

test("should indicate the rover is out of plateau's limits", () => {
  const currentLocation = [5, 5];
  const currentHeading = "N";
  const plateauSize = [4, 4];
  const rover = new Rover(currentLocation, currentHeading);
  rover.checkPlateauLimits(plateauSize);
  expect(rover.currentLocation).toBe(undefined);
});

test("should move the rover northward", () => {
  const currentLocation = [0, 0];
  const currentHeading = "N";
  const rover = new Rover(currentLocation, currentHeading);
  rover.moveForward();
  expect(rover.currentLocation).toEqual([0, 1]);
});

test("should move the rover eastward", () => {
  const currentLocation = [0, 0];
  const currentHeading = "E";
  const rover = new Rover(currentLocation, currentHeading);
  rover.moveForward();
  expect(rover.currentLocation).toEqual([1, 0]);
});

test("should move the rover southward", () => {
  const currentLocation = [0, 0];
  const currentHeading = "S";
  const rover = new Rover(currentLocation, currentHeading);
  rover.moveForward();
  expect(rover.currentLocation).toEqual([0, -1]);
});

test("should move the rover westward", () => {
  const currentLocation = [0, 0];
  const currentHeading = "W";
  const rover = new Rover(currentLocation, currentHeading);
  rover.moveForward();
  expect(rover.currentLocation).toEqual([-1, 0]);
});

test("should change the heading from N to W by turning left", () => {
  const currentLocation = [0, 0];
  const currentHeading = "N";
  const rover = new Rover(currentLocation, currentHeading);
  rover.changeHeading("L");
  expect(rover.currentHeading).toBe("W");
});

test("should change the heading from N to E by turning right", () => {
  const currentLocation = [0, 0];
  const currentHeading = "N";
  const rover = new Rover(currentLocation, currentHeading);
  rover.changeHeading("R");
  expect(rover.currentHeading).toBe("E");
});
