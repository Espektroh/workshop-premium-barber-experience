import { describe, expect, it } from "vitest";
import { getOccupancy } from "./occupancy";

describe("getOccupancy", () => {
  it("starts at zero without simulated sales", () => {
    expect(getOccupancy(75, 0)).toEqual({
      occupied: 0,
      available: 75,
      percentage: 0,
    });
  });

  it("calculates partial occupancy", () => {
    expect(getOccupancy(75, 30)).toEqual({
      occupied: 30,
      available: 45,
      percentage: 40,
    });
  });

  it("clamps occupancy to capacity", () => {
    expect(getOccupancy(75, 90)).toEqual({
      occupied: 75,
      available: 0,
      percentage: 100,
    });
  });

  it("clamps negative values", () => {
    expect(getOccupancy(75, -4)).toEqual({
      occupied: 0,
      available: 75,
      percentage: 0,
    });
  });
});
