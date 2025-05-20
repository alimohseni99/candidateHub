import { createFileRoute } from "@tanstack/react-router";
import Container from "@/feature/applicants/components/container";

export const Route = createFileRoute("/demo/tanstack-query")({
  component: TanStackQueryDemo,
});

function TanStackQueryDemo() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">People list</h1>
      <Container />
    </div>
  );
}
