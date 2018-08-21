const { LEFT, RIGHT } = require("./command");
const { NORTH, SOUTH, EAST, WEST, turnLeft, turnRight } = require("./heading");

class Rover {
  constructor(currentLocation, currentHeading) {
    this.currentLocation = currentLocation; // array of size 2 [x, y]
    this.currentHeading = currentHeading; // // string of "N" / "S" / "E" / "W"
  }

  checkPlateauLimits(plateauSize) {
    if (
      this.currentLocation[0] > plateauSize[0] ||
      this.currentLocation[1] > plateauSize[1]
    ) {
      this.currentLocation = undefined;
    }
  }

  moveForward() {
    if (this.currentHeading === EAST) {
      this.currentLocation[0] += 1;
    } else if (this.currentHeading === WEST) {
      this.currentLocation[0] -= 1;
    } else if (this.currentHeading === NORTH) {
      this.currentLocation[1] += 1;
    } else if (this.currentHeading === SOUTH) {
      this.currentLocation[1] -= 1;
    }
  }

  changeHeading(direction) {
    if (direction === LEFT) {
      this.currentHeading = turnLeft(this.currentHeading);
    } else if (direction === RIGHT) {
      this.currentHeading = turnRight(this.currentHeading);
    } else {
      console.log("invalid heading instructions");
    }
  }
}

module.exports = Rover;
