"use client";

import CreateFlow from "~/app/_components/CreateFlow";

export default function HomePage() {
    // add a button that links to the settings route /settings
  return (
      <div className={"flex flex-col items-center justify-center"}>
        <CreateFlow title={"British Parliamentary"} />
        <a href="/settings">Go to settings</a>
      </div>
  );
}
