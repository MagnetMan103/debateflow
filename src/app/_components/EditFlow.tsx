import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import { IoMdSettings } from "react-icons/io";
import {type speechStructure} from "~/app/flow/page";

export default function EditFlow(props: { title: string, setItems: Dispatch<SetStateAction<string[]>> }) {
    const [show, setShow] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setShow(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [ref]);

    const showOptions = () => {
        setShow(!show);
    }

    const onDelete = () => {
        localStorage.removeItem(props.title);
        props.setItems((prev) => prev.filter((item) => item !== props.title));
        setShow(false);
    }

    const onRename = () => {
        const newName = prompt("Enter new name");
        if (!newName) { return; }
        const data = JSON.parse(localStorage.getItem(props.title)!) as speechStructure;
        data.Title = newName;
        localStorage.setItem(props.title, JSON.stringify(data));
        setShow(false);
        props.setItems((prev) => [...prev]);

    }

    return (
        <div ref={ref} className={"absolute top-0 right-0 mt-1 mr-1"}>
            <IoMdSettings className={"h-6 w-6 cursor-pointer"} onClick={showOptions} />
            {show && (
                <div className={"absolute top-8 right-0 border border-black p-2 rounded-lg bg-gray-600 opacity-95"}>
                    <button className={"block text-left p-1 select-none hover:opacity-70 text-white"}
                    onClick={onRename}>Rename</button>
                    <button className={"block text-left p-1 select-none hover:opacity-70 text-white"}
                            onClick={onDelete}>Delete</button>
                </div>
            )}
        </div>
    )
}