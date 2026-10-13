import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IV Drip Information & Appointments | PMC Koh Sirey",
  description:
    "Ask PMC Koh Sirey about IV drip service information and appointments. Individual assessment is completed at the clinic before service is provided.",
};

export default function IvDripLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
