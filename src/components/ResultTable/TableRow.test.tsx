import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import TableRow from "./TableRow";

describe("Testing component: TableRow", () => {
  test("renders the label and value correctly", () => {
    render(<TableRow label="IP Address" value="192.168.0.1" />);

    expect(screen.getByText("IP Address")).toBeInTheDocument();
    expect(screen.getByText("192.168.0.1")).toBeInTheDocument();
  });
  
});