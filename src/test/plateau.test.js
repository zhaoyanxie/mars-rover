const Plateau = require("../model/plateau");

test("should return true for a rover within plateau limits", () => {
  const plateau = new Plateau([5, 5]);
  expect(plateau.isWithinPlateauLimits([5, 5])).toBeTruthy;
});

test("should return false for a rover out of plateau's length", () => {
  const plateau = new Plateau([5, 5]);
  expect(plateau.isWithinPlateauLimits([6, 5])).toBeFalsy;
});

test("should return false for a rover out of plateau's breadth", () => {
  const plateau = new Plateau([5, 5]);
  expect(plateau.isWithinPlateauLimits([5, 6])).toBeTruthy;
});
