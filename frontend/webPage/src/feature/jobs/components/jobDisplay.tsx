import { useQueryClient } from "@tanstack/react-query";
import { deleteJob } from "../misc/fetchCalls";
import type { jobInfo } from "../type";
import { FloatingLabelInput } from "@/components/floating-input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  Separator,
} from "@radix-ui/react-select";

export default function JobDisplay({ title, status, url }: jobInfo) {
  const queryClient = useQueryClient();

  async function deleteJobClick(jobId: string) {
    const status = await deleteJob(jobId);
    if (status == 200) {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    }
  }

  const statusOptions = ["Applied", "Offer", "Rejected"];

  return (
    <>
      <section className="bg-card shadow-md rounded-sm  transition-colors duration-75">
        <li className="flex flex-col gap-2">
          <div className="flex flex-row space-x-4 gap-2">
            <FloatingLabelInput
              id="floating-customize"
              label={title}
              className="border-none"
            />
            <div className="flex flex-col gap-2 justify-center items-center">
              <Select>
                <SelectTrigger className="flex flex-start bg-blue-500 rounded-full px-2 ">
                  <SelectValue placeholder={status} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="bg-card w-3xs p-4 rounded">
                    <SelectLabel className="flex flex-start text-gray-400">
                      To-do
                    </SelectLabel>
                    <SelectItem
                      value="Applied"
                      className="flex flex-start bg-blue-500 rounded-full px-2 cursor-pointer "
                    >
                      Applied
                    </SelectItem>

                    <SelectLabel className="flex flex-start text-gray-400 mt-4">
                      In-progress
                    </SelectLabel>
                    {statusOptions.map((s, key) => {
                      return (
                        <SelectItem
                          key={key}
                          value={s}
                          className="flex flex-start mt-2 bg-blue-500 rounded-full pl-2 cursor-pointer"
                        >
                          {s}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </li>
      </section>
    </>
  );
}
