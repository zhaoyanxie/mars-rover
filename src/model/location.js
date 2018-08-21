const { NORTH, SOUTH, EAST, WEST } = require("./heading");

class Location {
  constructor(location) {
    this.x = location[0];
    this.y = location[1];
  }

  moveForward(heading) {
    if (heading === EAST) {
      this.x += 1;
    } else if (heading === WEST) {
      this.x -= 1;
    } else if (heading === NORTH) {
      this.y += 1;
    } else if (heading === SOUTH) {
      this.y -= 1;
    }
    return [this.x, this.y];
  }
}

module.exports = Location;
