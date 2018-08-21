const { createRover, moveRover } = require("../utils/helperFunctions");

test("should return a rover instance upon calling createRover", () => {
  const x = "5 5";
  const y = "0 0 N";
  const rover = createRover(y);
  expect(rover.currentLocation).toEqual([0, 0]);
  expect(rover.currentHeading).toBe("N");
});

test("should return a rover instance moved per test input rover#1", () => {
  const x = "5 5";
  const y = "1 2 N";
  const z = "LMLMLMLMM";
  const rover = createRover(y);
  moveRover(rover, z);
  expect(rover.currentLocation).toEqual([1, 3]);
  expect(rover.currentHeading).toBe("N");
});

test("should return a rover instance moved per test input rover#2", () => {
  const x = "5 5";
  const y = "3 3 E";
  const z = "MMRMMRMRRM";
  const rover = createRover(y);
  moveRover(rover, z);
  expect(rover.currentLocation).toEqual([5, 1]);
  expect(rover.currentHeading).toBe("E");
});
