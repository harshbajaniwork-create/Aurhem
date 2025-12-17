"use client";

import PageBanner from "~/components/PageBanner";
import { ProjectsGrid } from "../components/projects-grid";
import { ImpactMetrics } from "../components/impact-metrics";
import { Contact } from "~/modules/home/ui/components/contact";

export const InitiativeView = () => {
  return (
    <main>
      <PageBanner
        title="Our Initiatives"
        description="Driving sustainable growth through strategic infrastructure projects across the globe. Explore how we are turning capital into tangible impact."
        backgroundImage="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Initiatives", href: "/initiatives" },
        ]}
      />

      <ImpactMetrics />
      <ProjectsGrid />
      <Contact />
    </main>
  );
};
