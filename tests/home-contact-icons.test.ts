import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const homepage = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");

describe("homepage contact shortcut strip", () => {
  it("uses icon-only controls for the four contact platforms", () => {
    expect(homepage).toContain("function PlatformIcon");
    for (const kind of ["phone", "line", "whatsapp", "map"]) {
      expect(homepage).toContain(`kind: \"${kind}\"`);
    }
    expect(homepage).toContain("aria-label={action.label}");
    expect(homepage).toContain("title={action.label}");
    expect(homepage).toContain("<span className=\"sr-only\">{action.label}</span>");
  });
});
