import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `http://10.0.2.2:5001/eat-bfbed/us-central1/geocode?city=${searchTerm}`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Network response was not ok: ${res.statusText}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error(`There was a problem with the fetch operation: ${error}`);
      // You can either re-throw the error or return a default value
      throw error;
    });
};

export const locationTransform = (result) => {
  // console.log(result);`
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
