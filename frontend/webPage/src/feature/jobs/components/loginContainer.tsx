import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import UserContainer from "./userContainer";

export default function LoginContainer() {
  return (
    <>
      <SignedIn>
        <UserContainer />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  );
}
