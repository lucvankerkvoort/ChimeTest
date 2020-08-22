const fetch = require("node-fetch");
const data = require("./import");

it("calls Chime to get jokes", () => {
    expect.assertions(10);
    return data.getChime2(fetch).then((data) => {
        data.results.forEach(data => {
      expect(data.type).toBe("programming") 
        });
    });
  });
  

it("calls Chime to get jokes", () => {
    expect.assertions(1);
    return data.getChime2(fetch).then((data) => {
      expect(data.count).toEqual(10)
    });
  });
  