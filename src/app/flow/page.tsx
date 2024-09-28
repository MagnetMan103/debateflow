"use client";
import { Suspense } from 'react'
import {useSearchParams} from "next/navigation";
import {getFlowStructure} from "~/app/_functions/getFlowStructure";

export default function FlowPage() {
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    if (!title) { return null; }
    const flowStructure = getFlowStructure(title);
    // return the number of speeches text boxes, titled with the speech names
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <div>
            <div className={"flex flex-row"}>
        {title && <p className={"text-white ml-6"}
        >Type: {title}</p>}
        <p className={"text-white ml-6"}>Side: {flowStructure.sides[0]}</p>
            </div>
        <div className={"flex flex-col h-[calc(100vh)] items-center"}>
            <div className={"flex flex-row h-[calc(93vh)]"}>
            {flowStructure.speechNames.map((speechName, index) => {
                let style = index % 2 === 0 ?
                    "h-full w-44 bg-red-300 text-black p-1 overflow-auto resize-none":
                    "h-full w-44 bg-blue-300 text-black p-1 overflow-auto resize-none";
                if (index === 0) {
                    style += " rounded-l-md";
                } else if (index === flowStructure.speechNames.length-1) {
                    style += " rounded-r-md";
                }
                return (
                    <div key={index}>
                        <p className={"text-white text-center select-none"}>{speechName}</p>
                        <textarea className={style} />
                    </div>
                );
            })}
            </div>
        </div>
        </div>
        </Suspense>
    );
}