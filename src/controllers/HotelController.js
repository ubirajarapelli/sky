const amadeus = require('../amadeusAPI')

module.exports = {
  async index(request, response) {
    const { cityCode, adults, roomQuantity } = request.query

    let hotels = [];
    await amadeus.shopping.hotelOffers.get({
      cityCode,
      roomQuantity,
      adults
    }).then(function(response){
      console.log(response.result);
      hotels = response.data
    })
    .catch(function(responseError){
      hotels = responseError.description;
    });
    return response.json(hotels)
  }
}
