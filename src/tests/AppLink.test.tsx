import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppLink } from "../components/ui/AppLink";
import { MemoryRouter } from "react-router-dom";

test("renders AppLink with correct text and type", () => {
  render(
    <MemoryRouter>
      <AppLink to="/path">Link Text</AppLink>
    </MemoryRouter>
  );

  const linkElement = screen.getByText("Link Text");

  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", "/path");
});
