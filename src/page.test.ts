import { describe, expect, it } from "vitest";
import { eventConfig } from "./config";
import { renderPage } from "./page";

describe("renderPage", () => {
  it("renders the confirmed commercial information", () => {
    const page = renderPage();

    expect(page).toContain("08 NOV 2026");
    expect(page.replace(/\s/g, " ")).toContain("R$ 300");
    expect(page).toContain("75 VAGAS");
    expect(page).toContain("ATÉ 18H");
    expect(page).toContain("Sorocaba");
  });

  it("positions Fidelis as the headliner and removes the previous speaker", () => {
    const page = renderPage();

    expect(page).toContain("Fidelis");
    expect(page).toContain("fidelis_educador");
    expect(page).toContain("Fórmula D.F.S");
    expect(page).not.toContain("Kauã");
    expect(page).not.toContain("Hausman");
    expect(page).not.toContain("kauahausman");
  });

  it("keeps CTAs inert while no checkout URL is configured", () => {
    const page = renderPage();

    expect(eventConfig.ctaUrl).toBe("");
    expect(page.match(/class="[^"]*cta-button[^"]*"/g)).toHaveLength(6);
    expect(page).not.toContain('class="cta-button" href=');
  });

  it("renders five FAQ items", () => {
    const page = renderPage();

    expect(page.match(/<details>/g)).toHaveLength(5);
  });

  it("hides the occupancy bar while there are no real registrations", () => {
    const page = renderPage();

    expect(eventConfig.occupiedSeats).toBe(0);
    expect(page).not.toContain("occupancy-track");
    expect(page).toContain("Turma única");
  });

  it("renders the countdown skeleton in the initial markup", () => {
    const page = renderPage();

    expect(page).toContain("data-countdown-root");
    expect(page).toContain('data-countdown="days"');
  });

  it("uses a Sunday for the event date", () => {
    expect(new Date(eventConfig.dateIso).getDay()).toBe(0);
  });
});
