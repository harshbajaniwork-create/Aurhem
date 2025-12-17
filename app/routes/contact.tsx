import type { Route } from "./+types/contact";
import { ContactView } from "~/modules/contact/ui/views/contact-view";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us | Aurhem" },
    {
      name: "description",
      content:
        "Get in touch with Aurhem for investment inquiries and partnership opportunities.",
    },
  ];
}

export default function ContactPage() {
  return <ContactView />;
}
