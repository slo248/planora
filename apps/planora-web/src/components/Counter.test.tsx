import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Counter from "./Counter";

describe("Counter", () => {
  it("renders initial count and increments on click", () => {
    render(<Counter />);
    const button = screen.getByRole("button", { name: /count is 0/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(
      screen.getByRole("button", { name: /count is 1/i })
    ).toBeInTheDocument();
  });

  it("accepts a starting count via props", () => {
    render(<Counter start={5} />);
    const button = screen.getByRole("button", { name: /count is 5/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(
      screen.getByRole("button", { name: /count is 6/i })
    ).toBeInTheDocument();
  });
});
