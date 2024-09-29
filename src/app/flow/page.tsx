"use client";
import {useSearchParams} from "next/navigation";
import {getFlowStructure} from "~/app/_functions/getFlowStructure";
import {getStringUpToCharacter} from "~/app/_functions/arrayOperators";
import {defaultFlowStructure} from "~/app/_functions/getFlowStructure";
import {type ChangeEvent, useEffect, useState} from "react";

type FlowStructure = {
    speeches: number,
    speechNames: string[],
    times: number[],
    sides: string[],
}

type FlowProps = {
    id: string,
}
export default function FlowPage() {
    const searchParams = useSearchParams();
    const [flowStructure, setFlowStructure] = useState<FlowStructure>(
        getFlowStructure(getStringUpToCharacter(searchParams.get('title')!, "_")));
    const [speeches, setSpeeches] = useState<string[]>(
        new Array(flowStructure.speeches).fill("")
    );
    useEffect(() => {
        const savedSpeeches = localStorage.getItem(`title=${searchParams.get('title')!}`);
        if (savedSpeeches) {
            console.log(savedSpeeches);
            setSpeeches(JSON.parse(savedSpeeches));
        }
    }, []);
    const title = searchParams.get('title');
    if (!title) { return; }

    const onBlur = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        const index = parseInt(event.target.id);
        speeches[index] = value;
        localStorage.setItem(`title=${title}`, JSON.stringify(speeches));

    }
    return (
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
                        <textarea className={style}
                        defaultValue={speeches[index]}
                        onBlur={onBlur}
                        id={index.toString()}/>
                    </div>
                );
            })}
            </div>
        </div>
        </div>
    );
}