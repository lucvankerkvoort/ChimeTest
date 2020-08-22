const fetch = require("node-fetch");
const data = require("./import");

it("calls Chime to get jokes", () => {
    expect.assertions(1);
    return data.getChime1(fetch).then((data) => {
      expect(data.results.type).toBe("programming")
    });
  });
  
