import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ResultTable from "./ResultTable";
import type { SubnetResult } from "../../models/SubnetResult";

describe("Testing component:ResultTable", () => {
  const mockResults: SubnetResult = {
    ipAddress: "192.168.0.1",
    ipType: "Private",
    networkAddress: "192.168.0.0",
    broadcastAddress: "192.168.0.255",
    firstHost: "192.168.0.1",
    lastHost: "192.168.0.254",
    gateway: "192.168.0.1",
    hosts: 254,
    cidr: 24,
    subnetMask: "255.255.255.0",
    wildcardMask: "0.0.0.255",
  };

  test("renders nothing when results is null", () => {
    const { container } = render(<ResultTable results={null} />);
    expect(container.firstChild).toBeNull();
  });

  test("renders all rows", () => {
    render(<ResultTable results={mockResults} />);

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(11);
  });

  test("renders an Export button", () => {
    render(<ResultTable results={mockResults} />);
    const button = screen.getByText("Export");
    expect(button).toBeInTheDocument();
  });
});