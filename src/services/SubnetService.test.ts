import { describe, test, expect } from "vitest"
import { SubnetService } from "./SubnetService"

describe("SubnetService.calculate", () => {

  test("calculates subnet correctly using dotted mask", () => {
    const result = SubnetService.calculate(
      "192.168.1.10",
      "255.255.255.0"
    )

    expect(result.networkAddress).toBe("192.168.1.0")
    expect(result.broadcastAddress).toBe("192.168.1.255")
    expect(result.firstHost).toBe("192.168.1.1")
    expect(result.lastHost).toBe("192.168.1.254")
    expect(result.hosts).toBe(254)
    expect(result.cidr).toBe(24)
    expect(result.subnetMask).toBe("255.255.255.0")
  })


  test("calculates subnet correctly using CIDR mask", () => {
    const result = SubnetService.calculate(
      "192.168.1.10",
      "/24"
    )

    expect(result.networkAddress).toBe("192.168.1.0")
    expect(result.broadcastAddress).toBe("192.168.1.255")
    expect(result.firstHost).toBe("192.168.1.1")
    expect(result.lastHost).toBe("192.168.1.254")
    expect(result.hosts).toBe(254)
  })


  test("detects private IP range", () => {
    const result = SubnetService.calculate(
      "192.168.1.0",
      "/24"
    )

    expect(result.ipType).toBe("private")
  })


  test("detects loopback IP", () => {
    const result = SubnetService.calculate(
      "127.0.0.1",
      "255.0.0.0"
    )

    expect(result.ipType).toBe("loopback")
  })

  test("detects unicast IP", () => {
    const result = SubnetService.calculate(
      "8.8.8.8",
      "/24"
    )

    expect(result.ipType).toBe("unicast")
  })


  test("calculates /25 subnet correctly", () => {
    const result = SubnetService.calculate(
      "192.168.1.10",
      "/25"
    )

    expect(result.networkAddress).toBe("192.168.1.0")
    expect(result.broadcastAddress).toBe("192.168.1.127")
    expect(result.firstHost).toBe("192.168.1.1")
    expect(result.lastHost).toBe("192.168.1.126")
    expect(result.hosts).toBe(126)
    expect(result.subnetMask).toBe("255.255.255.128")
  })

})