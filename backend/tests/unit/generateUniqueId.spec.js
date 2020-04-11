const generateUniqueId = require("../../src/utils/generateuniqueId");

describe("Generate Unique ID", () => {
  it("should generate a unique ID", () => {
    const id = generateUniqueId();
    expect(id).toHaveLength(8);
  });
});
