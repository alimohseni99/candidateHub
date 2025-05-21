import type { applicant } from "@/feature/applicants/misc/fetchCalls";
import { useUser } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../misc/fetchCalls";
import LoaderAnimation from "@/components/loader";
import JobContainer from "./jobContainer";

export default function UserContainer() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  let userName = user.fullName;
  if (userName === null) {
    userName = "John Doe";
  }
  const activeUser: jobUser = {
    mail: user.emailAddresses[0].toString(),
    clerkId: user.id,
    name: userName,
  };

  const { isPending, isError, data } = useQuery<applicant>({
    queryKey: ["user"],
    queryFn: () => fetchUser(activeUser),
  });

  if (isPending) {
    return <LoaderAnimation text="Fetching user data" />;
  }

  if (isError) {
    return <div>An Error has occured</div>;
  }

  return (
    <>
      <JobContainer id={data.id} />
    </>
  );
}

export type jobUser = {
  name: string;
  mail: string;
  clerkId: string;
};
