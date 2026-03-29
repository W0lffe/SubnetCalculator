import { validateIpAddress } from "./validate.ts";
import { describe, test, expect } from "vitest"

describe("Testing function: validateIpAddress", () => {

  test("should return error when IP is empty", () => {
    const result = validateIpAddress("");

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("IP address is required!");
  });

  test("should return error for invalid IP format", () => {
    const result = validateIpAddress("999.999.999.999");

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Invalid IP address format!");
  });

  test("should return error when IP does not have 4 octets", () => {
    const result = validateIpAddress("192.168.1");

    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Invalid IP address format!");
  });

  test("should validate a correct IPv4 address", () => {
    const result = validateIpAddress("192.168.1.1");

    expect(result.valid).toBe(true);
    expect(result.errors.length).toBe(0);
  });

});