import { describe, expect, it } from "vitest";
import { eventConfig } from "./config";
import { renderPage } from "./page";

describe("renderPage", () => {
  it("renders the confirmed commercial information", () => {
    const page = renderPage();

    expect(page).toContain("08 NOV 2026");
    expect(page).toContain("Domingo, 08 de novembro de 2026");
    expect(page.replace(/\s/g, " ")).toContain("R$ 300");
    expect(page).toContain("75 VAGAS");
    expect(page).toContain("ATÉ 18H");
  });

  it("keeps CTAs inert while no checkout URL is configured", () => {
    const page = renderPage();

    expect(eventConfig.ctaUrl).toBe("");
    expect(page.match(/class="[^"]*cta-button[^"]*"/g)).toHaveLength(5);
    expect(page).not.toContain('class="cta-button" href=');
  });

  it("renders five FAQ items", () => {
    const page = renderPage();

    expect(page.match(/<details>/g)).toHaveLength(5);
  });

  it("uses a Sunday for the event date", () => {
    expect(new Date(eventConfig.dateIso).getDay()).toBe(0);
  });
});
