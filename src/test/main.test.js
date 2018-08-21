const mockGetUserInput = jest.fn();
// jest.setTimeout(30000);

jest.doMock("../../readline-helper.js", () => {
  return {
    getUserInput: mockGetUserInput
  };
});
const main = require("../../main");

test("should expect getUserInput to be called", async () => {
  // mockGetUserInput
  //   .mockReturnValueOnce("5 5")
  //   .mockReturnValueOnce("1 2 N")
  //   .mockReturnValueOnce("LMLMLMLMM");

  main();
  expect(mockGetUserInput).toBeCalled();
});
