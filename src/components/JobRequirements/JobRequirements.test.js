import { render, screen } from "@testing-library/react";
import JobRequirements from "./JobRequirements";

const requirements = ["Safety Vest", "Hard Hat", "First Aider"];

test("Number of requirements rendered matches props", () => {
  render(<JobRequirements requirements={requirements} />);
  expect(screen.getAllByRole("listitem").length).toBe(3);
});

test("Handles undefined requirements", () => {
  render(<JobRequirements requirements={undefined} />);
  expect(screen.getByTestId("warning")).toHaveTextContent(/Data unavailable/);
});

test("Handles no requirements", () => {
  render(<JobRequirements requirements={[]} />);
  expect(screen.getByTestId("warning")).toHaveTextContent("n/a");
});
