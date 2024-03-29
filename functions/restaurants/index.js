const functions = require("firebase-functions");
const url = require("url");

const addGoogleImage = (restaurant) => {
  const ref = restaurant.photos[0].photo_reference;
  if (!ref) {
    restaurant.photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ];
    return restaurant;
  }
  const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${
    functions.config().google.key
  }`;
  restaurant.photos = [photoUrl];
  return restaurant;
};

module.exports.restaurantsRequest = (request, response, client) => {
  const { location } = url.parse(request.url, true).query;
  client
    .placesNearby({
      params: {
        location: location,
        radius: 1500,
        type: "restaurant",
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then((res) => {
      if (res) {
        res.data.results = res.data.results.map(addGoogleImage);
      } else {
        console.error("res.results is undefined");
      }
      return response.json(res.data);
    })
    .catch((e) => {
      response.status(400);
      response.send(`Error: ${e.message}`);
    });
};
