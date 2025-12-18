import type { Route } from "./+types/services";
import { ServicesView } from "~/modules/services/ui/views/services-view";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Services | Aurhem" },
    {
      name: "description",
      content:
        "Comprehensive infrastructure, financial, energy, and industrial services driving global growth.",
    },
  ];
}

export default function ServicesPage() {
  return <ServicesView />;
}
