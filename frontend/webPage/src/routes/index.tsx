import { ModeToggle } from "@/components/mode-toggle";
import UserContainer from "@/feature/jobs/components/userContainer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="text-center  h-screen">
      <div className="flex justify-end p-2">
        <ModeToggle />
      </div>
      <UserContainer />
    </div>
  );
}
