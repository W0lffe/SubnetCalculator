import { render, screen, fireEvent } from "@testing-library/react";
<<<<<<< HEAD
import { describe, test, expect, vi } from "vitest";
=======
import { describe, test, expect, vi, beforeEach } from "vitest";
>>>>>>> 74592bd340e31eebb0e749f54b965caa58134b98
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
  
<<<<<<< HEAD
  test("renders Overview and Subnetting buttons", () => {

    render(<ModeSelector />);

    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(screen.getByText("Subnetting")).toBeInTheDocument();
  });

  test("clicking Overview calls navigate with /calculator", () => {
=======
  test("renders Basic and Advanced buttons", () => {

    render(<ModeSelector />);

    expect(screen.getByText("Basic")).toBeInTheDocument();
    expect(screen.getByText("Advanced")).toBeInTheDocument();
  });

  test("clicking Basic calls navigate with /calculator", () => {
>>>>>>> 74592bd340e31eebb0e749f54b965caa58134b98
    vi.spyOn(Router, "useLocation").mockReturnValue({ pathname: "/calculator" } as any);

    render(<ModeSelector />);

<<<<<<< HEAD
    fireEvent.click(screen.getByText("Overview"));
    expect(mockNavigate).toHaveBeenCalledWith("/calculator");
  });

  test("clicking Subnetting calls navigate with /calculator/advanced", () => {
=======
    fireEvent.click(screen.getByText("Basic"));
    expect(mockNavigate).toHaveBeenCalledWith("/calculator");
  });

  test("clicking Advanced calls navigate with /calculator/advanced", () => {
>>>>>>> 74592bd340e31eebb0e749f54b965caa58134b98
    vi.spyOn(Router, "useLocation").mockReturnValue({ pathname: "/calculator" } as any);

    render(<ModeSelector />);

<<<<<<< HEAD
    fireEvent.click(screen.getByText("Subnetting"));
    expect(mockNavigate).toHaveBeenCalledWith("/calculator/subnetting");
  });

  test("adds active class for the current route", () => {
    vi.spyOn(Router, "useLocation").mockReturnValue({ pathname: "/calculator/subnetting" } as any);

    render(<ModeSelector />);

    const basicButton = screen.getByText("Overview");
    const advancedButton = screen.getByText("Subnetting");
=======
    fireEvent.click(screen.getByText("Advanced"));
    expect(mockNavigate).toHaveBeenCalledWith("/calculator/advanced");
  });

  test("adds active class for the current route", () => {
    vi.spyOn(Router, "useLocation").mockReturnValue({ pathname: "/calculator/advanced" } as any);

    render(<ModeSelector />);

    const basicButton = screen.getByText("Basic");
    const advancedButton = screen.getByText("Advanced");
>>>>>>> 74592bd340e31eebb0e749f54b965caa58134b98

    expect(basicButton.className).toContain("border-b-red-600/0");

    expect(advancedButton.className).toContain("border-b-red-600 border-b-2 font-semibold");
  });
});