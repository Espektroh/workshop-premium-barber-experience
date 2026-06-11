import { describe, expect, it } from "vitest";
import { getCountdown } from "./countdown";

describe("getCountdown", () => {
  it("returns the remaining time before the event", () => {
    const result = getCountdown(
      new Date("2026-11-08T09:00:00-03:00"),
      new Date("2026-11-07T07:58:55-03:00"),
    );

    expect(result).toEqual({
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 5,
      completed: false,
    });
  });

  it("returns a completed state after the event starts", () => {
    const result = getCountdown(
      new Date("2026-11-08T09:00:00-03:00"),
      new Date("2026-11-08T10:00:00-03:00"),
    );

    expect(result).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      completed: true,
    });
  });
});
