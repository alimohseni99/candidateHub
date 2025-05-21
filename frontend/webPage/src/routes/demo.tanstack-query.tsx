import JobContainer from "@/feature/jobs/components/jobContainer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo/tanstack-query")({
  component: TanStackQueryDemo,
});

function TanStackQueryDemo() {
  return (
    <div className="p-4">
      <JobContainer />
    </div>
  );
}
