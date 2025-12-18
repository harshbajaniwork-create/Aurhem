import type { Route } from "./+types/home";
import { HomeView } from "~/modules/home/ui/views/home-view";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Aurhem | Global Investment Platform" },
    {
      name: "description",
      content:
        "Driving transformative growth across critical sectors—Infrastructure, Financial Services, Oil & Gas, and Clean Energy. We partner with governments, institutions, and communities to develop integrated ecosystems that power economic progress and social equity.",
    },
  ];
}

export default function Home() {
  return (
    <main>
      <HomeView />
    </main>
  );
}
