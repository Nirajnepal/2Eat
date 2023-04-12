const functions = require("firebase-functions");

const { payRequest } = require("./pay");
const { geocodeRequest } = require("./geocode");

const stripeClient = require("stripe")(functions.config().stripe.key);
// console.log(stripeClient);

exports.pay = functions.https.onRequest((request, response) => {
  payRequest(request, response, stripeClient);
});

exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response);
});
