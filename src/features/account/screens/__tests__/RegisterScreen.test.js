import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { RegisterScreen } from "../register.screen";

const onRegister = jest.fn();
it("should render correctly", () => {
  const { getByLabelText, getByText } = render(
    <AuthenticationContext.Provider value={{ onRegister }}>
      <RegisterScreen />
    </AuthenticationContext.Provider>
  );
  expect(getByLabelText("E-mail")).toBeDefined();
  expect(getByLabelText("Password")).toBeDefined();
  expect(getByLabelText("Repeat Password")).toBeDefined();
  expect(getByText("Register")).toBeDefined();
  expect(getByText("Back")).toBeDefined();
});

it("should call onLogin when Login button is pressed", () => {
  const clearError = jest.fn();
  const { getByText, getByLabelText } = render(
    <AuthenticationContext.Provider value={{ onRegister, clearError }}>
      <RegisterScreen />
    </AuthenticationContext.Provider>
  );
  fireEvent.changeText(getByLabelText("E-mail"), "test@test.com");
  fireEvent.changeText(getByLabelText("Password"), "password");
  fireEvent.changeText(getByLabelText("Repeat Password"), "password");
  fireEvent.press(getByText("Register"));
  expect(onRegister).toHaveBeenCalledWith(
    "test@test.com",
    "password",
    "password"
  );
  expect(clearError).toHaveBeenCalled();
});
