const fetch = require("node-fetch")


  const getChime1 = async (fetch) => {
      const getRequest = await fetch("https://official-joke-api.appspot.com/jokes/programming/random");
      const data = await getRequest.json();
      return {
          results: data[0]
      }
  }


  const getChime2 = async (fetch) => {
    const getRequest = await fetch("https://official-joke-api.appspot.com/jokes/programming/ten");
    const data = await getRequest.json();
    return {
        results: data,
        count: data.length
    }
}
console.log(getChime2(fetch).then(data => console.log(data, data.count)))
  module.exports ={
      getChime1,
      getChime2
  }