import React from "react";
import { __esModule } from "@testing-library/jest-dom/dist/matchers";
import { render, waitFor, screen } from "@testing-library/react";
import SearchScreen from "./SearchScreen";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";

describe("Basic functionality", () => {
  __esModule: true,
    it("should display header", async () => {
      render(
        <BrowserRouter>
          <SearchScreen />
        </BrowserRouter>
      );
      expect(screen.getByText("ONDC Sample App"));
    });

  it("should show find ride button", async () => {
    render(
      <BrowserRouter>
        <SearchScreen />
      </BrowserRouter>
    );
    await waitFor(() => screen.getByRole("button"));
    expect(screen.getByRole("button")).toBeEnabled();
  });
});
