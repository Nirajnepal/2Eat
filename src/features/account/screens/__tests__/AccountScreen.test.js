import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { AccountScreen } from "../account.screen";

describe("AccountScreen", () => {
  test("renders the Login and Register buttons", () => {
    const { getByText } = render(<AccountScreen />);
    const loginButton = getByText("Login");
    const registerButton = getByText("Register");
    expect(loginButton).toBeDefined();
    expect(registerButton).toBeDefined();
  });

  test("navigates to the Login screen when the Login button is pressed", () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByText } = render(<AccountScreen navigation={mockNavigation} />);
    const loginButton = getByText("Login");
    fireEvent.press(loginButton);
    expect(mockNavigation.navigate).toHaveBeenCalledWith("Login");
  });

  test("navigates to the Register screen when the Register button is pressed", () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByText } = render(<AccountScreen navigation={mockNavigation} />);
    const registerButton = getByText("Register");
    fireEvent.press(registerButton);
    expect(mockNavigation.navigate).toHaveBeenCalledWith("Register");
  });
});
