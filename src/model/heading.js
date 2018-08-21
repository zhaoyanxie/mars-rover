const NORTH = "N";
const SOUTH = "S";
const EAST = "E";
const WEST = "W";

const turnLeft = currentHeading => {
  const leftRotationSequence = [NORTH, WEST, SOUTH, EAST];
  const currentHeadingIndex = leftRotationSequence.indexOf(currentHeading);
  const updateHeadingIndex = (currentHeadingIndex + 1) % 4;
  return leftRotationSequence[updateHeadingIndex];
};

const turnRight = currentHeading => {
  const rightRotationSequence = [NORTH, EAST, SOUTH, WEST];
  const currentHeadingIndex = rightRotationSequence.indexOf(currentHeading);
  const updateHeadingIndex = (currentHeadingIndex + 1) % 4;
  return rightRotationSequence[updateHeadingIndex];
};

module.exports = {
  NORTH,
  SOUTH,
  EAST,
  WEST,
  turnLeft,
  turnRight
};
