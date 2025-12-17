import type { Route } from "./+types/about";
import { AboutView } from "~/modules/about/ui/views/about-view";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us | Aurhem" },
    {
      name: "description",
      content:
        "Learn about Aurhem's mission, values, and leadership driving sustainable infrastructure investment.",
    },
  ];
}

export default function AboutPage() {
  return <AboutView />;
}
