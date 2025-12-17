"use client";

import PageBanner from "~/components/PageBanner";
import { MissionSection } from "../components/mission-section";
import { ValuesSection } from "../components/values-section";
import { TeamSection } from "../components/team-section";
import { Contact } from "~/modules/home/ui/components/contact";

export const AboutView = () => {
  return (
    <main>
      <PageBanner
        title="About Aurhem"
        description="We are a global investment platform dedicated to building sustainable infrastructure and empowering communities across emerging markets."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
      />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <Contact />
    </main>
  );
};
