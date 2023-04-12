const functions = require("firebase-functions");

const { payRequest } = require("./pay");
const { geocodeRequest } = require("./geocode");
const { restaurantsRequest } = require("./restaurants");
const { Client } = require("@googlemaps/google-maps-services-js");
const client = new Client();

const stripeClient = require("stripe")(functions.config().stripe.key);

exports.pay = functions.https.onRequest((request, response) => {
  payRequest(request, response, stripeClient);
});

exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response, client);
});

exports.restaurantsNearby = functions.https.onRequest((request, response) => {
  restaurantsRequest(request, response, client);
});
