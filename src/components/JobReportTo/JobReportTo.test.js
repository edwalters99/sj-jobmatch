import { render, screen } from "@testing-library/react";
import JobReportTo from "./JobReportTo";

test("Name renders - first Name only - full name", () => {
  render(<JobReportTo reportToName="Joe Bloggs" reportToPhone="2130010012" />);
  expect(screen.getByTestId("name-phone").textContent).toBe(
    "Joe (213) 001 0012"
  );
});

test("Name renders - first Name only - single name", () => {
  render(<JobReportTo reportToName="Joe" reportToPhone="2130010012" />);
  expect(screen.getByTestId("name-phone").textContent).toBe(
    "Joe (213) 001 0012"
  );
});

test("Handles undefined name", () => {
  render(<JobReportTo reportToName={undefined} reportToPhone="2130010012" />);
  expect(screen.getByTestId("name-phone").textContent).toBe("n/a");
});

test("Handles undefined phone", () => {
  render(<JobReportTo reportToName="Joe Bloggs" reportToPhone={undefined} />);
  expect(screen.getByTestId("name-phone").textContent).toBe("Joe ");
});
