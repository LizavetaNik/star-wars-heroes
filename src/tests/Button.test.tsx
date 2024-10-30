import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "../components/ui/Button";

test("renders button with correct text", () => {
  render(<Button text="Click me" />);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});
