import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import ModeSelector from "./ModeSelector";
import * as Router from "react-router-dom";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
  useLocation: () => ({
    pathname: "/",
  }),

}));

describe("ModeSelector", () => {
  
  test("renders Basic and Advanced buttons", () => {

    render(<ModeSelector />);

    expect(screen.getByText("Basic")).toBeInTheDocument();
    expect(screen.getByText("Advanced")).toBeInTheDocument();
  });

  test("clicking Basic calls navigate with /calculator", () => {
    vi.spyOn(Router, "useLocation").mockReturnValue({ pathname: "/calculator" } as any);

    render(<ModeSelector />);

    fireEvent.click(screen.getByText("Basic"));
    expect(mockNavigate).toHaveBeenCalledWith("/calculator");
  });

  test("clicking Advanced calls navigate with /calculator/advanced", () => {
    vi.spyOn(Router, "useLocation").mockReturnValue({ pathname: "/calculator" } as any);

    render(<ModeSelector />);

    fireEvent.click(screen.getByText("Advanced"));
    expect(mockNavigate).toHaveBeenCalledWith("/calculator/advanced");
  });

  test("adds active class for the current route", () => {
    vi.spyOn(Router, "useLocation").mockReturnValue({ pathname: "/calculator/advanced" } as any);

    render(<ModeSelector />);

    const basicButton = screen.getByText("Basic");
    const advancedButton = screen.getByText("Advanced");

    expect(basicButton.className).toContain("border-b-red-600/0");

    expect(advancedButton.className).toContain("border-b-red-600 border-b-2 font-semibold");
  });
});