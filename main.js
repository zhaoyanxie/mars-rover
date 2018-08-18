const { getUserInput, rl } = require("./readline-helper");

const main = async () => {
  const x = await getUserInput(
    "Specify the size of the Mars plateau (e.g. 5 5):"
  );
  console.log("x is", x);

  const y = await getUserInput(
    "Specify the initial coordinates and direction of the mars rover (e.g. 1 2 N):"
  );
  console.log("y is", y);

  const z = await getUserInput(
    "Specify the instructions for the mars rover (e.g. LMLMLMLMM):"
  );
  console.log("z is", z);
  rl.close();
};

main();
