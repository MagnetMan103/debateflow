"use client";
import {useSearchParams} from "next/navigation";
import {getFlowStructure} from "~/app/_functions/getFlowStructure";
import {getStringUpToCharacter} from "~/app/_functions/arrayOperators";
import {type ChangeEvent, useEffect, useState} from "react";

type FlowStructure = {
    speeches: number,
    speechNames: string[],
    times: number[],
    sides: string[],
}

type speechStructure = {
    Aff: string[],
    Neg: string[],
}

const redStyle = "h-full w-44 bg-red-300 text-black p-1 overflow-auto resize-none";
const blueStyle = "h-full w-44 bg-blue-300 text-black p-1 overflow-auto resize-none";

export default function FlowPage() {
    const searchParams = useSearchParams();
    const [flowStructure] = useState<FlowStructure>(
        getFlowStructure(getStringUpToCharacter(searchParams.get('title')!, "_")));
    const [speeches, setSpeeches] = useState<speechStructure>(
        {Aff: new Array<string>(flowStructure.speeches).fill(""),
            Neg: new Array<string>(flowStructure.speeches).fill("")}
    );
    const [side, setSide] = useState<string>("Aff");

    useEffect(() => {
        const savedSpeeches = localStorage.getItem(`title=${searchParams.get('title')!}`);
        if (savedSpeeches) {
            const loadedSpeech = JSON.parse(savedSpeeches) as speechStructure;
            setSpeeches(loadedSpeech);
        }
    }, [searchParams]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowDown" && event.shiftKey) {
                setSide((side === "Aff" ? "Neg" : "Aff"));
                localStorage.setItem(`title=${searchParams.get('title')}`, JSON.stringify(speeches));
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [searchParams, side, speeches]);

    const title = searchParams.get('title');
    if (!title) { return; }

    const onBlur = () => {
        localStorage.setItem(`title=${title}`, JSON.stringify(speeches));
    }

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value;
        const index = parseInt(event.target.id);
        if (currentSide() === flowStructure.sides[0]) {
            speeches.Aff[index] = value;
        } else {
            speeches.Neg[index] = value;
        }
    }

    const changeSide = () => {
        setSide((side === "Aff" ? "Neg" : "Aff"));
        // change the speeches to the other side
    }

    function currentSide() {
        return side === "Aff" ? flowStructure.sides[0] : flowStructure.sides[1];
    }

    return (
        <div>
            <div className={"flex flex-row"}>
        {title && <p className={"text-white ml-6"}
        >Type: {title}</p>}
        <p className={"text-white ml-6 cursor-pointer select-none"}
        onClick={changeSide}>
            Side: {side}
        </p>
            </div>
        <div className={"flex flex-col h-[calc(100vh)] items-center"}>
            <div className={"flex flex-row h-[calc(93vh)]"}>
            {side === "Aff" ? flowStructure.speechNames.map((speechName, index) => {
                let style = index % 2 === 1 ? redStyle: blueStyle;
                if (index === 0) {
                    style += " rounded-l-md";
                } else if (index === flowStructure.speechNames.length-1) {
                    style += " rounded-r-md";
                }
                return (
                    <div key={index}>
                        <p className={"text-white text-center select-none"}>{speechName}</p>
                        <textarea className={style}
                        defaultValue={speeches.Aff[index]}
                        onBlur={onBlur}
                        onChange={onChange}
                        id={index.toString()}
                        maxLength={2000}/>
                    </div>
                );
            }):
                flowStructure.speechNames.slice(1).map((speechName, index) => {
                    let style = index % 2 === 0 ? redStyle: blueStyle;
                    if (index === 0) {
                        style += " rounded-l-md";
                    } else if (index === flowStructure.speechNames.length-2) {
                        style += " rounded-r-md";
                    }
                    return (
                        <div key={index+10}>
                            <p className={"text-white text-center select-none"}>{speechName}</p>
                            <textarea className={style}
                            defaultValue={speeches.Neg[index]}
                            onBlur={onBlur}
                            onChange={onChange}
                            id={index.toString()}
                            maxLength={2000}/>
                        </div>
                    );
                })
            }
            </div>
        </div>
        </div>
    );
}
