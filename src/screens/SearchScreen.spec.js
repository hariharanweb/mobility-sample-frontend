import React from "react";
import { __esModule } from "@testing-library/jest-dom/dist/matchers";
import { render, waitFor, screen } from "@testing-library/react";
import SearchScreen from "./SearchScreen";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");
  return {
    __esModule: true,
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

describe("Basic functionality", () => {
  __esModule: true,
    it("should display header", async () => {
      render(<SearchScreen />);
      expect(screen.getByText("ONDC Sample App"));
    });

  it("should show find ride button", async () => {
    render(<SearchScreen />);
    await waitFor(() => screen.getByRole("button"));
    expect(screen.getByRole("button")).toBeEnabled();
  });
});
