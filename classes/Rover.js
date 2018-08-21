class Rover {
  constructor(currentLocation, currentHeading, plateauSize) {
    this.currentLocation = currentLocation; // array of size 2 [x, y]
    this.currentHeading = currentHeading; // // string of "N" / "S" / "E" / "W"
    this.plateauSize = plateauSize;
  }

  checkPlateauLimits() {
    if (
      this.currentLocation[0] > this.plateauSize[0] ||
      this.currentLocation[1] > this.plateauSize[1]
    ) {
      this.currentLocation = undefined;
    }
  }

  moveForward() {
    if (this.currentHeading === "E") {
      this.currentLocation[0] += 1;
    } else if (this.currentHeading === "W") {
      this.currentLocation[0] -= 1;
    } else if (this.currentHeading === "N") {
      this.currentLocation[1] += 1;
    } else if (this.currentHeading === "S") {
      this.currentLocation[1] -= 1;
    }
  }

  changeHeading(direction) {
    if (direction === "L") {
      if (this.currentHeading === "N") {
        this.currentHeading = "W";
      } else if (this.currentHeading === "W") {
        this.currentHeading = "S";
      } else if (this.currentHeading === "S") {
        this.currentHeading = "E";
      } else if (this.currentHeading === "E") {
        this.currentHeading = "N";
      }
    } else if (direction === "R") {
      if (this.currentHeading === "N") {
        this.currentHeading = "E";
      } else if (this.currentHeading === "E") {
        this.currentHeading = "S";
      } else if (this.currentHeading === "S") {
        this.currentHeading = "W";
      } else if (this.currentHeading === "W") {
        this.currentHeading = "N";
      }
    } else {
      console.log("invalid heading instructions");
    }
  }
}

module.exports = Rover;
