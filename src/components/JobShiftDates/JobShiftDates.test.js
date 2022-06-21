import { render, screen } from "@testing-library/react";
import JobShiftDates from "./JobShiftDates";

const shifts = [
  {
    startDate: "2019-09-04T21:00:00Z",
    endDate: "2019-09-05T05:00:00Z",
  },
  {
    startDate: "2019-09-05T21:00:00Z",
    endDate: "2019-09-06T05:00:00Z",
  },
  {
    startDate: "2019-09-06T21:00:00Z",
    endDate: "2019-09-07T05:00:00Z",
  },
  {
    startDate: "2019-09-07T21:00:00Z",
    endDate: "2019-09-08T05:00:00Z",
  },
  {
    startDate: "2019-09-08T21:00:00Z",
    endDate: "2019-09-09T05:00:00Z",
  },
];

const singleShift = [
  {
    startDate: "2019-09-04T21:00:00Z",
    endDate: "2019-09-05T05:00:00Z",
  },
];

test("Number of Shifts Rendered matches props", () => {
  render(<JobShiftDates shifts={shifts} zoneId="America/Chicago" />);
  expect(screen.getAllByRole("listitem").length).toBe(5);
});

test("Shift Renders with correct timezone and formatting CDT", () => {
  render(<JobShiftDates shifts={singleShift} zoneId="America/Chicago" />);
  expect(screen.getByRole("listitem")).toHaveTextContent(
    /Sep 4, Wed 4:00 PM - 12:00AM CDT/
  );
});

test("Shift Renders with correct timezone and formatting EDT", () => {
  render(<JobShiftDates shifts={singleShift} zoneId="America/New_York" />);
  expect(screen.getByRole("listitem")).toHaveTextContent(
    /Sep 4, Wed 5:00 PM - 1:00AM EDT/
  );
});

test("Handles undefined shifts", () => {
  render(<JobShiftDates shifts={undefined} zoneId="America/New_York" />);
  expect(screen.getByRole("listitem")).toHaveTextContent(
    /Shift data unavailable/
  );
});

test("Handles undefined zone ID", () => {
  render(<JobShiftDates shifts={singleShift} zoneId={undefined} />);
  expect(screen.getByRole("listitem")).toHaveTextContent(
    /Shift data unavailable/
  );
});

test("Handles no shifts", () => {
  render(<JobShiftDates shifts={[]} zoneId="America/Chicago" />);
  expect(screen.getByRole("listitem")).toHaveTextContent(/No shifts available/);
});
