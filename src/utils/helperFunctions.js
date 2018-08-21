const Rover = require("../model/Rover");

const createRover = y => {
  // const plateauSize = [Number(x.split(" ")[0]), Number(x.split(" ")[0])];
  const currentHeading = y.split(" ")[2];
  const currentLocation = [Number(y.split(" ")[0]), Number(y.split(" ")[1])];
  const rover = new Rover(currentLocation, currentHeading);
  return rover;
};

const moveRover = (rover, z) => {
  z.split("").forEach(step => {
    if (step === "L" || step === "R") {
      rover.changeHeading(step);
    } else if (step === "M") {
      rover.moveForward();
    } else {
      console.log("Wrong instruction");
    }
  });
};

module.exports = { createRover, moveRover };
