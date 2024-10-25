const express = require("express");
const routes = express.Router();

const FlightController = require("./controllers/FlightController");
const HotelController = require("./controllers/HotelController");

routes.get("/flights", FlightController.index);
routes.get("/hotels", HotelController.index);

module.exports = routes;
