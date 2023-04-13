import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return fetch(
    `http://10.0.2.2:5001/eat-bfbed/us-central1/restaurantsNearby?location=${location}`
  )
    .then((res) => {
      if (!res.ok) {
        console.log(res);
        throw new Error(`Network response was not ok: ${res.statusText}`);
      }
      return res.json();
    })
    .catch((error) => {
      // console.log(error);
      console.error(`There was a problem with the fetch operation: ${error}`);
      throw error;
    });
};

export const restaurantsTransform = ({ results = [] }) => {
  // console.log(results);
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
