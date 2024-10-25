const amadeus = require("../amadeusAPI");

module.exports = {
  async index(request, response) {
    const {
      originLocationCode,
      destinationLocationCode,
      departureDate,
      returnDate,
      adults,
    } = request.query;

    let flights = [];
    await amadeus.shopping.flightOffersSearch
      .get({
        originLocationCode,
        destinationLocationCode,
        departureDate,
        returnDate,
        adults,
      })
      .then(function (response) {
        flights = response.data;
      })
      .catch(function (responseError) {
        flights = responseError.description;
      });

    return response.json(flights);
  },
};
