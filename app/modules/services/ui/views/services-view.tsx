import PageBanner from "~/components/PageBanner";
import { ServicesList } from "../components/services-list";
import { Contact } from "~/modules/home/ui/components/contact";

export const ServicesView = () => {
  return (
    <main>
      <PageBanner
        title="Our Services"
        description="Driving sustainable growth through strategic infrastructure projects across the globe. Explore how we are turning capital into tangible impact."
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />
      <ServicesList />
      <Contact />
    </main>
  );
};
