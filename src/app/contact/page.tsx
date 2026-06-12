import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Contact from "@/components/sections/Contact";
import ContactSteps from "@/components/sections/ContactSteps";
import Faq from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with us — tell us where you want to go and we will map the fastest route there.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Talk to the people"
        accent="who do the work."
        description="No discovery-call gatekeepers, no sales scripts. Your message lands with a senior designer or engineer — the same people who would actually build your product."
        meta={[
          { label: "Response time", value: "< 24 hours" },
          { label: "NDA", value: "Same day" },
        ]}
      />
      <Contact />
      <ContactSteps />
      <Faq />
    </>
  );
}
