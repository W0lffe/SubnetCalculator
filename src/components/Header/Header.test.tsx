import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

vi.mock("../Navigation/Navigation", () => ({
  default: () => <div>Mocked Navigation</div>,
}));

describe("Testing component: Header", () => {
  test("renders the title", () => {
    render(<Header />);
    expect(screen.getByText("Subnex")).toBeInTheDocument();
  });

  test("renders the Navigation component", () => {
    render(<Header />);
    expect(screen.getByText("Mocked Navigation")).toBeInTheDocument();
  });
});