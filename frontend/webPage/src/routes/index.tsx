import { ModeToggle } from "@/components/mode-toggle";
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
      <h1>Hello World</h1>
    </div>
  );
}
