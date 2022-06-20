import { render, screen } from "@testing-library/react";
import JobDistanceRate from "./JobDistanceRate";

test("Distance renders rounded to 1 decimal place", () => {
  render(<JobDistanceRate distance={10.65123} />);
  expect(screen.getByTestId("distance").textContent).toBe("10.7 miles");
});

test("Distance renders without decimal places when whole number", () => {
  render(<JobDistanceRate distance={10} />);
  expect(screen.getByTestId("distance").textContent).toBe("10 miles");
});

test("Distance handles undefined", () => {
  render(<JobDistanceRate distance={undefined} />);
  expect(screen.getByTestId("distance").textContent).toBe("Not Available");
});

test("Hourly Rate renders rounded to 2 decimal places", () => {
  render(<JobDistanceRate rate={1099.31} />);
  expect(screen.getByTestId("rate").textContent).toBe("$10.99");
});

test("Hourly Rate handles undefined", () => {
  render(<JobDistanceRate rate={undefined} />);
  expect(screen.getByTestId("rate").textContent).toBe("tbc");
});
