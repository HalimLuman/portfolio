import Hero from "@/components/sections/hero/Hero";
import FlowLine from "@/components/ui/FlowLine";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Technologies from "@/components/sections/Technologies";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    // relative wrapper hosts the scroll-drawn thread behind every section
    <div className="relative">
      <FlowLine />
      <Hero />
      <Services />
      <Work />
      <Process />
      <WhyUs />
      <Stats />
      <Testimonials />
      <Technologies />
      <Faq />
      <Contact />
    </div>
  );
}
