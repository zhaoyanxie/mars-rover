const {
  NORTH,
  SOUTH,
  EAST,
  WEST,
  turnLeft,
  turnRight
} = require("../model/heading");

describe("turn left", () => {
  test("should return WEST from NORTH after turning left", () => {
    expect(turnLeft(NORTH)).toBe(WEST);
  });

  test("should return SOUTH from WEST after turning left", () => {
    expect(turnLeft(WEST)).toBe(SOUTH);
  });

  test("should return EAST from SOUTH after turning left", () => {
    expect(turnLeft(SOUTH)).toBe(EAST);
  });

  test("should return NORTH from EAST after turning left", () => {
    expect(turnLeft(EAST)).toBe(NORTH);
  });
});

describe("turn right", () => {
  test("should return EAST from NORTH after turning left", () => {
    expect(turnRight(NORTH)).toBe(EAST);
  });
  test("should return SOUTH from EAST after turning left", () => {
    expect(turnRight(EAST)).toBe(SOUTH);
  });
  test("should return WEST from SOUTH after turning left", () => {
    expect(turnRight(SOUTH)).toBe(WEST);
  });
  test("should return NORTH from WEST after turning left", () => {
    expect(turnRight(WEST)).toBe(NORTH);
  });
});
