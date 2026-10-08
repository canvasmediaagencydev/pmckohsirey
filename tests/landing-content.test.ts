import { describe, expect, it } from "vitest";
import {
  landingCopy,
  pricingItems,
  supportedLocales,
} from "@/lib/landing-content";

describe("PMC Koh Sirey landing content", () => {
  it("ships complete Thai and Burmese copy for each supported locale", () => {
    expect(supportedLocales).toEqual(["th", "my"]);

    for (const locale of supportedLocales) {
      const copy = landingCopy[locale];
      expect(copy.hero.title.length).toBeGreaterThan(0);
      expect(copy.hero.openingHours.length).toBeGreaterThan(0);
      expect(copy.actions.call.length).toBeGreaterThan(0);
      expect(copy.actions.line.length).toBeGreaterThan(0);
      expect(copy.location.mapsCta.length).toBeGreaterThan(0);
    }
  });

  it("does not invent medical prices when no approved price list exists", () => {
    expect(pricingItems).toHaveLength(0);
  });
});
