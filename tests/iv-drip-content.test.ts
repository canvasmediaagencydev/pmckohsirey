import { describe, expect, it } from "vitest";
import { ivDripCopy, ivDripLocales } from "@/lib/iv-drip-content";

const disallowedMarketingClaims = [
  "detox",
  "anti-aging",
  "cure",
  "treat disease",
  "guaranteed",
  "boost immunity",
  "hangover cure",
];

describe("IV Drip campaign content", () => {
  it("provides a complete, safe landing experience in Thai, Myanmar, and English", () => {
    expect(ivDripLocales).toEqual(["th", "my", "en"]);

    for (const locale of ivDripLocales) {
      const copy = ivDripCopy[locale];
      expect(copy.hero.title).toBeTruthy();
      expect(copy.hero.body).toContain(copy.assessmentPhrase);
      expect(copy.overview.bullets).toHaveLength(4);
      expect(copy.overview.bulletsTitle).toBeTruthy();
      expect(copy.safety.items).toHaveLength(4);
      expect(copy.visit.body).toBeTruthy();
      expect(copy.visit.items).toEqual(expect.arrayContaining([expect.objectContaining({ icon: expect.any(String) })]));
      expect(copy.faq.items).toHaveLength(3);
      expect(copy.contactIcons).toMatchObject({ line: expect.any(String), phone: expect.any(String), whatsapp: expect.any(String), map: expect.any(String) });
      expect(copy.disclaimer).toBeTruthy();
      expect(copy.actions.line).toBeTruthy();
      expect(copy.actions.call).toBeTruthy();
    }
  });

  it("does not contain prohibited efficacy-style marketing claims", () => {
    const allCopy = JSON.stringify(ivDripCopy).toLowerCase();
    for (const claim of disallowedMarketingClaims) {
      expect(allCopy).not.toContain(claim);
    }
  });
});
