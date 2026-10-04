import { createFileRoute } from "@tanstack/react-router";
import TisHome from "@/components/TisHome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Boarding School in Dehradun | Tulas International School" },
      { name: "description", content: "Tulas International School is a leading CBSE co-educational boarding and day school in Dehradun, India." },
      { property: "og:title", content: "Tulas International School, Dehradun" },
      { property: "og:description", content: "Discover academics, boarding life, sports and student opportunities at Tulas International School." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <TisHome />;
}
