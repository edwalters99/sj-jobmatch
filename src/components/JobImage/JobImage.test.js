import { render, screen } from "@testing-library/react";
import JobImage from "./JobImage";

test("img with image prop as src", () => {
  render(<JobImage image={"url"} jobTitle="Test Job Title" />);
  expect(screen.getByRole("img")).toHaveAttribute("src", "url");
});

test("img with JobTitle prop as alt text", () => {
  render(<JobImage image={"url"} jobTitle="Test Job Title" />);
  expect(screen.getByRole("img")).toHaveAttribute("alt", "Test Job Title");
});

test("Placeholder photo when image is undefined", () => {
  render(<JobImage image={undefined} jobTitle="Test Job Title" />);
  expect(screen.getByRole("img")).toHaveAttribute(
    "src",
    "placeholderimage.png"
  );
});

test("Default alt text when jobTitle is undefined", () => {
  render(<JobImage image={"url"} jobTitle={undefined} />);
  expect(screen.getByRole("img")).toHaveAttribute("alt", "Example job image");
});
