import { ModeToggle } from "@/components/mode-toggle";
import UserContainer from "@/feature/jobs/components/userContainer";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="text-center  h-screen">
      <div className="flex justify-end p-2 gap-2">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <ModeToggle />
      </div>
      <UserContainer />
    </div>
  );
}
