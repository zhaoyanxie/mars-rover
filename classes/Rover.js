class Rover {
  constructor(currentLocation, currentHeading, plateauSize) {
    this.currentLocation = currentLocation; // array of size 2 [x, y]
    this.currentHeading = currentHeading; // // string of "N" / "S" / "E" / "W"
    this.plateauSize = plateauSize;

    if (this.checkPlateauLimits()) {
      this.currentLocation = undefined;
      this.currentHeading = undefined;
    }
  }

  checkPlateauLimits() {
    if (
      this.currentLocation[0] > this.plateauSize[0] ||
      this.currentLocation[1] > this.plateauSize[1]
    ) {
      console.log("Rover has fallen off plateau!");
      return true;
    }
  }
}

module.exports = Rover;
