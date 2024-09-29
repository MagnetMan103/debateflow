"use client";

import CreateFlow from "~/app/_components/CreateFlow";
import FlowPreview from "~/app/_components/FlowPreview";
import {useEffect, useState} from "react";
import {getAllLocalStorageKeys} from "~/app/_functions/arrayOperators";

export default function HomePage() {
    const [items, setItems] = useState<string[]>([]);
    useEffect(() => {
        setItems(getAllLocalStorageKeys());
        // what you need to do is get all the keys
        // create a new component that routes to the proper page
        // based on the key
        // and then you're done with the project
    }, []);
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
          <div className={"flex items-center justify-center w-screen"}>
          <div className={"grid grid-cols-5 w-[calc(110vh)]"}>
          {items.map((item, index) => {
                return (
                    <div key={index}>
                        <FlowPreview title={item}/>
                    </div>
                );
          })};
          </div>
          </div>

      </div>
  );
}
