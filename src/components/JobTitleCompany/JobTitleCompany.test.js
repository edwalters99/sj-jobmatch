import { render, screen } from "@testing-library/react";
import JobTitleCompany from "./JobTitleCompany";

test("Job Title Renders", () => {
  render(<JobTitleCompany jobTitle="General Labourer" />);
  expect(screen.getByRole("heading", { level: 2 }).textContent).toBe(
    "General Labourer"
  );
});

test("Job Title handles undefined", () => {
  render(<JobTitleCompany jobTitle={undefined} />);
  expect(screen.getByRole("heading", { level: 2 }).textContent).toBe(
    "Job title unavailable"
  );
});

test("Company Name Renders", () => {
  render(<JobTitleCompany companyName="ACME Labouring ltd" />);
  expect(screen.getByRole("heading", { level: 3 }).textContent).toBe(
    "ACME Labouring ltd"
  );
});

test("Company Name handles undefined", () => {
  render(<JobTitleCompany companhyName={undefined} />);
  expect(screen.getByRole("heading", { level: 3 }).textContent).toBe(
    "Company name unavailable"
  );
});
