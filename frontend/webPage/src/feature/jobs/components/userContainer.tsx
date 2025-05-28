import type { applicant } from "@/feature/applicants/misc/fetchCalls";
import { useUser } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../misc/fetchCalls";
import JobContainer from "./jobContainer";

export type jobUser = {
  mail: string;
  clerkId: string;
};

export default function UserContainer() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const activeUser: jobUser = {
    mail: user.emailAddresses[0].toString(),
    clerkId: user.id,
  };

  const { isPending, isError, data } = useQuery<applicant>({
    queryKey: ["user"],
    queryFn: () => fetchUser(activeUser),
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>An Error has occurred</div>;
  }

  return (
    <>
      <JobContainer id={data.id} />
    </>
  );
}
