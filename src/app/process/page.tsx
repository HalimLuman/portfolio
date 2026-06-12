import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Process from "@/components/sections/Process";
import Collaboration from "@/components/sections/Collaboration";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Process",
  description:
    "From discovery to optimization — how we take products from idea to launch with zero drama.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        label="Process"
        title="Great products aren't lucky."
        accent="They're scheduled."
        description="Six phases, a weekly rhythm you can set your watch to, and a handful of rules we never bend. This page is the operating manual for working with us — no mystery, no drama."
        meta={[
          { label: "Phases", value: "6" },
          { label: "Demo cadence", value: "Weekly" },
        ]}
      />
      <Process />
      <Collaboration />
      <CtaBanner
        title="See the process"
        accent="from the inside."
        description="The fastest way to evaluate how we work is a discovery sprint — two to three weeks, a fixed price, and a roadmap you keep either way."
      />
    </>
  );
}
