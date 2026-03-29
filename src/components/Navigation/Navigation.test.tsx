import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Navigation from "./Navigation";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

const renderNavigation = () => render(<Navigation />);

describe("Testing component: Navigation", () => {
  test("renders navigation buttons", () => {
    renderNavigation();

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("App")).toBeInTheDocument();
  });

  test("navigates to '/' when Home is clicked", () => {
    renderNavigation();

    fireEvent.click(screen.getByText("Home"));

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  test("navigates to '/app' when App is clicked", () => {
    renderNavigation();

    fireEvent.click(screen.getByText("App"));

    expect(mockNavigate).toHaveBeenCalledWith("/app");
  });
});