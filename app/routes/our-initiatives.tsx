import type { Route } from "./+types/our-initiatives";
import { InitiativeView } from "~/modules/initiative/ui/views/initiative-view";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Initiatives & Projects | Aurhem" },
    {
      name: "description",
      content:
        "Explore Aurhem's global infrastructure projects, renewable energy initiatives, and sustainable development investments.",
    },
  ];
}

export default function InitiativesPage() {
  return <InitiativeView />;
}
