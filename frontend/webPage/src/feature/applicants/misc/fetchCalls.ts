export type applicant = {
  name: "string";
  mail: "string";
  id: "string";
  clerkId: "string";
};

const url = import.meta.env.VITE_BACKEND_URL;

export async function fetchApplicants() {
  const data_1 = await fetch(url + "/api/applicant");
  return await data_1.json();
}
