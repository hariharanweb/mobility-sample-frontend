import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LocationSearch from "./LocationSearch";
import * as ReactGoogleMapsApi from "@react-google-maps/api";
import { FormControl } from "@mui/material";
// let globals = {}
let toLocation;
// global.google = {
//   maps: {
//     places: {
//       Autocomplete: jest.fn(),
//     },
//   },
// };

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");
  return {
    ...originalModule,
    useNavigate: jest.fn(),
    // addListener: jest.fn(),
    //   removeListener: jest.fn(),
  };
});

jest.mock("@react-google-maps/api", () => {
  const originalApi = jest.requireActual("react-router-dom");
  return {
    ...originalApi,
    useJsApiLoader: jest.fn(),
  };
});

describe("Basic functionality", () => {
  toLocation = {
    display: "Garuda Mall",
    latLong: "12.9702626,77.6099629",
  };

  // beforeAll(() => {

  // })
  it("shows loader", () => {
    jest.spyOn(ReactGoogleMapsApi, "useJsApiLoader").mockReturnValue({
      isLoaded: false,
    });
    render(
      <LocationSearch
        label="To"
        initialLocation={toLocation}
        onLocationChange={() => {}}
        onCancelDisabled={() => {}}
      />
    );

    expect(screen.getByText("")).toBeInDocument();
  });
});
