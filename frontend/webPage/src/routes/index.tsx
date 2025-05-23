import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="text-center bg-foreground">
      <Button className="cursor-pointer">Click Me</Button>
      <h1>Hello World</h1>
    </div>
  );
}
