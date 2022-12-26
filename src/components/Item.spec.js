import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import Item from "./Item";
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");
  return {
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

let item = {};
describe("Basic functionality", () => {
  item = {
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
  };

  it("should display catalog header image", async () => {
    render(<Item item={item} />);
    const displayedImage = document.querySelector("img");
    expect(displayedImage.src).toContain(
      "https://cdn.iconscout.com/icon/premium/png-256-thumb/searching-car-automobile-3052095-2538547.png"
    );
  });

  it("should display taxi", async () => {
    render(<Item item={item} />);
    expect(screen.getByText("Tata - Nexon"));
  });

  it("should display taxi category", async () => {
    render(<Item item={item} />);
    expect(screen.getByText("Premium Taxi"));
  });

  it("should display value ", async () => {
    render(<Item item={item} />);
    expect(screen.getByText("₹ 111"));
  });

  it("should display select button ", async () => {
    const { container } = render(<Item item={item} />);
    const button = container.querySelector("Button");
    expect(button).toBeInTheDocument();
    expect(button.textContent).toContain("Select");
  });
});
