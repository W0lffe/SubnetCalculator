import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
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
  
  test("renders Overview and Subnetting buttons", () => {

    render(<ModeSelector />);

    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(screen.getByText("Subnetting")).toBeInTheDocument();
  });

  test("clicking Overview calls navigate with /calculator", () => {
    vi.spyOn(Router, "useLocation").mockReturnValue({ pathname: "/calculator" } as any);

    render(<ModeSelector />);

    fireEvent.click(screen.getByText("Overview"));
    expect(mockNavigate).toHaveBeenCalledWith("/calculator");
  });

  test("clicking Subnetting calls navigate with /calculator/advanced", () => {
    vi.spyOn(Router, "useLocation").mockReturnValue({ pathname: "/calculator" } as any);

    render(<ModeSelector />);

    fireEvent.click(screen.getByText("Subnetting"));
    expect(mockNavigate).toHaveBeenCalledWith("/calculator/subnetting");
  });

  test("adds active class for the current route", () => {
    vi.spyOn(Router, "useLocation").mockReturnValue({ pathname: "/calculator/subnetting" } as any);

    render(<ModeSelector />);

    const basicButton = screen.getByText("Overview");
    const advancedButton = screen.getByText("Subnetting");

    expect(basicButton.className).toContain("border-b-red-600/0");

    expect(advancedButton.className).toContain("border-b-red-600 border-b-2 font-semibold");
  });
});