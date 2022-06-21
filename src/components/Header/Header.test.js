import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("Header renders Name when firstName and lastName supplied", () => {
  render(<Header firstName="Joe" LastName="Bloggs" />);
  expect(screen.getByTestId("heading")).not.toBeEmptyDOMElement();
});

test("Header does not render Name when firstName and lastName are undefined", () => {
  render(<Header firstName={undefined} LastName={undefined} />);
  expect(screen.queryByTestId("heading")).toBeFalsy();
});

test("Header renders Name when firstName supplied and lastName undefined", () => {
  render(<Header firstName={"Joe"} LastName={undefined} />);
  expect(screen.getByTestId("heading")).not.toBeEmptyDOMElement();
});

test("Header does not render Name when firstName is undefined and lastName is supplied", () => {
  render(<Header firstName={undefined} LastName={"Bloggs"} />);
  expect(screen.queryByTestId("heading")).toBeFalsy();
});

test("logo renders in Header", () => {
  render(<Header />);
  expect(screen.getByRole("img")).toBeInTheDocument();
});
