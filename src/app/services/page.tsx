import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Services from "@/components/sections/Services";
import EngagementModels from "@/components/sections/EngagementModels";
import Technologies from "@/components/sections/Technologies";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design, software and mobile development, UI/UX, and dedicated teams — the full stack of a digital product studio.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Capabilities that"
        accent="compound."
        description="Strategy, design, and engineering under one roof — so nothing gets lost in handoff. Pick a single capability or the whole stack; either way you get the same senior team and the same standard of craft."
        meta={[
          { label: "Disciplines", value: "6" },
          { label: "Avg. partnership", value: "3+ years" },
        ]}
      />
      <Services />
      <EngagementModels />
      <Technologies />
      <CtaBanner
        title="Not sure which"
        accent="service you need?"
        description="That's normal — most projects touch several. One scoping call and we'll map the shortest path to what you're actually trying to achieve."
      />
    </>
  );
}
