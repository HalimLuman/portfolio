import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Work from "@/components/sections/Work";
import WorkArchive from "@/components/sections/WorkArchive";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects — platforms, products, and experiences we have designed and engineered for ambitious teams.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="Work"
        title="Proof,"
        accent="not promises."
        description="Every project here shipped, on a date we committed to, and is still in production. We'd rather show you outcomes than adjectives — here are the ones we're proudest of."
        meta={[
          { label: "Projects delivered", value: "120+" },
          { label: "Industries", value: "14" },
        ]}
      />
      <Work />
      <WorkArchive />
      <Testimonials />
      <CtaBanner
        title="Want your product"
        accent="on this page?"
        description="The next case study could be yours. Tell us what you're building and we'll tell you honestly how we'd ship it."
      />
    </>
  );
}
