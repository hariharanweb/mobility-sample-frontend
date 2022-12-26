import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "./Loader";

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");
  return {
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

describe("Basic functionality", () => {
  it("should display loader", async () => {
    render(<Loader />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
