export type applicant = {
  name: "string";
  mail: "string";
  id: "string";
  clerkId: "string";
};

const url = import.meta.env.VITE_BACKEND_URL;

export function fetchApplicants() {
  console.log("fetching with " + url + "/api/applicant");
  return fetch(url + "/api/applicant").then((data) => data.json());
}
