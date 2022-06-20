import { render, screen } from "@testing-library/react";
import JobLocation from "./JobLocation";

const address = "430 Smith St, Chicago, IL 60654, USA";

test("Address renders from props", () => {
  render(<JobLocation address={address} distance={10.65123} />);
  expect(screen.getByTestId("address").textContent).toBe(
    "430 Smith St, Chicago, IL 60654, USA"
  );
});

test("Handles undefined address", () => {
  render(<JobLocation address={undefined} distance={10.65123} />);
  expect(screen.getByTestId("address").textContent).toBe("Address Unavailable");
});

test("Distance renders rounded to two decimal places", () => {
  render(<JobLocation address={address} distance={10.65123} />);
  expect(screen.getByTestId("distance").textContent).toBe(
    "10.65 miles from your job search location"
  );
});

test("Distance handles undefined", () => {
  render(<JobLocation address={address} distance={undefined} />);
  expect(screen.getByTestId("distance").textContent).toBe(
    "Distance unavailable"
  );
});
