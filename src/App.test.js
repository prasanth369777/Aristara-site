
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the Aristara website", () => {
  render(<App />);

  expect(document.getElementById("root")).toBeTruthy();
});

test("renders the main application without crashing", () => {
  const { container } = render(<App />);

  expect(container.firstChild).toBeInTheDocument();
});
