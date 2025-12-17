import PageBanner from "~/components/PageBanner";
import type { Route } from "./+types/home";
import { HomeView } from "~/modules/home/ui/views/home-view";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Aurhem" }, { name: "description", content: "Aurhem" }];
}

export default function Home() {
  return (
    <main>
      <HomeView />
    </main>
  );
}
