import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import Catalog from "./Catalog";
import "@testing-library/jest-dom";

jest.mock("./Item", () => () => <div data-testid="Item" />);

let catalog = {};
describe("Basic functionality", () => {
  catalog = {
    bpp_descriptor: {
      name: "Fake Taxi",
      code: "FAKE_TAXI",
    },
    bpp_providers: [
      {
        id: "FAKE_TAXI",
        descriptor: {
          name: "Fake Taxi",
          images: [
            "https://cdn3.iconfinder.com/data/icons/fake-news/500/yul748_24_fake_news_truck_business_logo_computer_car-512.png",
          ],
        },
        locations: [
          {
            id: "FAKE_TAXI_LOCATION_ID",
            gps: "12.973614,77.608548",
          },
        ],
        categories: [
          {
            id: "FAKE_TAXI_CATEGORY",
            descriptor: {
              name: "Premium Taxi",
            },
          },
        ],
        items: [
          {
            id: "FAKE_TAXI_ID",
            fulfillment_id: "FAKE_TAXI_FULFILLMENT_ID",
            descriptor: {
              name: "Premium Taxi",
              code: "Premium Taxi",
              images: [
                "https://cdn.iconscout.com/icon/premium/png-256-thumb/searching-car-automobile-3052095-2538547.png",
              ],
            },
            price: {
              currency: "INR",
              value: "111",
            },
            category_id: "FAKE_TAXI_CATEGORY_ID",
            tags: {
              NameOfModel: "Nexon",
              Make: "Tata",
              FuelType: "Petrol",
              VehicleType: "Premium Taxi",
            },
          },
        ],
      },
    ],
    bpp_fulfillments: [
      {
        tracking: false,
        start: {
          location: {
            gps: "12.934845,77.610949",
          },
        },
        end: {
          location: {
            gps: "13.011058,77.555064",
          },
        },
      },
    ],
    bpp_id: "LOCAL_BPP",
    bpp_uri: "http://localhost:3010/",
  };

  it("should display catalog header", async () => {
    render(<Catalog catalog={catalog} />);
    expect(screen.getByText("Fake Taxi"));
  });

  it("should display catalog header image", async () => {
    render(<Catalog catalog={catalog} />);
    const displayedImage = document.querySelector("img");
    expect(displayedImage.src).toContain(
      "https://cdn3.iconfinder.com/data/icons/fake-news/500/yul748_24_fake_news_truck_business_logo_computer_car-512.png"
    );
  });

  it("should display catalog item", async () => {
    const { getByTestId } = render(<Catalog catalog={catalog} />);
    expect(getByTestId("Item")).toBeInTheDocument();
  });
});
