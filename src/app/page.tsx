"use client";

import CreateFlow from "~/app/_components/CreateFlow";

export default function HomePage() {
    // add a button that links to the settings route /settings
  return (
      <div className={""}>
          <p className={"text-2xl font-normal text-gray-200 p-4"}>
              Create a flow</p>
          <div className={"flex flex-row items-center justify-center"}>
              <CreateFlow title={"ILRGL 3300"}/>
              <CreateFlow title={"Lincoln Douglas"}/>
              <CreateFlow title={"Public Forum"}/>
          </div>
          <p className={"text-2xl font-normal text-gray-200 p-4"}>
              Saved flows</p>
      </div>
  );
}
