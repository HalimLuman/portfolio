import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import StudioStory from "@/components/sections/StudioStory";
import WhyUs from "@/components/sections/WhyUs";
import Stats from "@/components/sections/Stats";
import Values from "@/components/sections/Values";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "The story, values, and people behind Kinetiq — a deliberately small, senior-only studio measured on outcomes.",
};

export default function StudioPage() {
  return (
    <>
      <PageHero
        label="Studio"
        title="Deliberately small."
        accent="Relentlessly senior."
        description="Kinetiq is what happens when designers and engineers who got tired of how agencies work build the alternative: a small team, a decade of trust, and zero interest in being the biggest — only the best to work with."
        meta={[
          { label: "Founded", value: "2015" },
          { label: "Working across", value: "EU · US · APAC" },
        ]}
      />
      <StudioStory />
      <Stats />
      <WhyUs />
      <Values />
      <CtaBanner
        title="Sound like a team"
        accent="you'd want on yours?"
        description="We take on a handful of new partners each year — deliberately. Tell us about your product and let's see if we're a fit."
      />
    </>
  );
}
