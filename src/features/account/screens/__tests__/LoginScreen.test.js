import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { LoginScreen } from "../login.screen";

describe("LoginScreen", () => {
  const onLogin = jest.fn();
  it("should render correctly", () => {
    const { getByLabelText, getByText } = render(
      <AuthenticationContext.Provider value={{ onLogin }}>
        <LoginScreen />
      </AuthenticationContext.Provider>
    );
    expect(getByLabelText("E-mail")).toBeDefined();
    expect(getByLabelText("Password")).toBeDefined();
    expect(getByText("Login")).toBeDefined();
    expect(getByText("Back")).toBeDefined();
  });

  it("should call onLogin when Login button is pressed", () => {
    const clearError = jest.fn();
    const { getByText, getByLabelText } = render(
      <AuthenticationContext.Provider value={{ onLogin, clearError }}>
        <LoginScreen />
      </AuthenticationContext.Provider>
    );
    fireEvent.changeText(getByLabelText("E-mail"), "test@test.com");
    fireEvent.changeText(getByLabelText("Password"), "password");
    fireEvent.press(getByText("Login"));
    expect(onLogin).toHaveBeenCalledWith("test@test.com", "password");
    expect(clearError).toHaveBeenCalled();
  });
});
