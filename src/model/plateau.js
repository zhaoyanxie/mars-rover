class Plateau {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }

  isWithinPlateauLimits(roverLocation) {
    if (roverLocation[0] > this.length || roverLocation[1] > this.breadth) {
      return false;
    }
    return true;
  }
}

module.exports = Plateau;
