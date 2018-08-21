const Location = require("../model/location");
const { NORTH, SOUTH, EAST, WEST } = require("../model/heading");

test("should return location y + 1 with north heading", () => {
  const location = new Location([1, 1]);
  const heading = NORTH;

  expect(location.moveForward(heading)).toEqual([1, 2]);
});

test("should return location y - 1 with south heading", () => {
  const location = new Location([1, 1]);
  const heading = SOUTH;

  expect(location.moveForward(heading)).toEqual([1, 0]);
});

test("should return location x + 1 with east heading", () => {
  const location = new Location([1, 1]);
  const heading = EAST;

  expect(location.moveForward(heading)).toEqual([2, 1]);
});

test("should return location x - 1 with west heading", () => {
  const location = new Location([1, 1]);
  const heading = WEST;

  expect(location.moveForward(heading)).toEqual([0, 1]);
});
