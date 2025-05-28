import { ModeToggle } from "@/components/mode-toggle";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { createFileRoute } from "@tanstack/react-router";
import { Blockquote, BlockquoteAuthor } from "@/components/ui/block-quote";
import { useState } from "react";
import { useEffect } from "react";
import { getRandomQuote } from "@/lib/quotes";
import UserContainer from "@/feature/jobs/components/userContainer";
import LoginContainer from "@/feature/jobs/components/loginContainer";
export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const [quote, setQuote] = useState(getRandomQuote());

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

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
      <div className="p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-20">
        <Blockquote>
          {quote.quote}
          <BlockquoteAuthor>{quote.author}</BlockquoteAuthor>
        </Blockquote>
      </div>
      <main>
        <div>
          <LoginContainer />
        </div>
      </main>
    </div>
  );
}
