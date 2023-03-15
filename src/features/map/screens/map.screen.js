import React, { useContext, useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { LocationContext } from "../../services/location/location.context";
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";

import { Search } from "../components/search";
// import { Marker } from "react-native-svg";

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <MapView
        style={styles.mapContainer}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            />
          );
        })}
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    height: "100%",
    width: "100%",
  },
});
