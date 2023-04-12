const functions = require("firebase-functions");

const { payRequest } = require("./pay");

const stripeClient = require("stripe")(functions.config().stripe.key);
// console.log(stripeClient);

exports.pay = functions.https.onRequest((request, response) => {
  payRequest(request, response, stripeClient);
});
