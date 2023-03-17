import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantScreen } from "../restaurant.screen";

describe("RestaurantScreen", () => {
  test("renders loading indicator when loading", () => {
    const location = { keyword: "test keyword", search: () => {} };
    const restaurants = [];
    const isLoading = true;
    const favourites = [];
    const mockNavigate = jest.fn();

    const { getByTestId } = render(
      <LocationContext.Provider value={location}>
        <RestaurantsContext.Provider value={{ isLoading, restaurants }}>
          <FavouritesContext.Provider value={{ favourites }}>
            <RestaurantScreen navigation={{ navigate: mockNavigate }} />
          </FavouritesContext.Provider>
        </RestaurantsContext.Provider>
      </LocationContext.Provider>
    );

    expect(getByTestId("loading-indicator")).toBeTruthy();
  });

  test("renders list of restaurants when not loading", () => {
    const location = { keyword: "test keyword", search: () => {} };
    const restaurants = [
      { id: "1", name: "Restaurant 1", userRatingsTotal: 1 },
      { id: "2", name: "Restaurant 2", userRatingsTotal: 2 },
    ];
    const isLoading = false;
    const favourites = [];
    const mockNavigate = jest.fn();

    const { getAllByTestId, getByText } = render(
      <LocationContext.Provider value={location}>
        <RestaurantsContext.Provider value={{ isLoading, restaurants }}>
          <FavouritesContext.Provider value={{ favourites }}>
            <RestaurantScreen navigation={{ navigate: mockNavigate }} />
          </FavouritesContext.Provider>
        </RestaurantsContext.Provider>
      </LocationContext.Provider>
    );

    const restaurantListElements = getAllByTestId(/restaurant-list-\d+/);
    expect(restaurantListElements).toHaveLength(2);
    expect(getByText("Restaurant 1")).toBeTruthy();
    expect(getByText("Restaurant 2")).toBeTruthy();
  });

  test("navigates to restaurant details screen when restaurant is pressed", () => {
    const location = { keyword: "test keyword", search: () => {} };
    const restaurant = { name: "Restaurant 1", userRatingsTotal: 1 };
    const restaurants = [restaurant];
    const isLoading = false;
    const favourites = [];
    const mockNavigate = jest.fn();

    const { getByTestId } = render(
      <LocationContext.Provider value={location}>
        <RestaurantsContext.Provider value={{ isLoading, restaurants }}>
          <FavouritesContext.Provider value={{ favourites }}>
            <RestaurantScreen navigation={{ navigate: mockNavigate }} />
          </FavouritesContext.Provider>
        </RestaurantsContext.Provider>
      </LocationContext.Provider>
    );

    fireEvent.press(getByTestId("restaurant-pressable"));

    expect(mockNavigate).toHaveBeenCalledWith("SingleRestaurantDetail", {
      restaurant,
    });
  });
});
