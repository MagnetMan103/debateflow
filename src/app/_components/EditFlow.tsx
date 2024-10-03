import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import { IoMdSettings } from "react-icons/io";

export default function EditFlow(props: { title: string, setItems: Dispatch<SetStateAction<string[]>> }) {
    const [show, setShow] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const showOptions = () => {
        setShow(!show);
    }

    const onDelete = () => {
        localStorage.removeItem(props.title);
        props.setItems((prev) => prev.filter((item) => item !== props.title));
        setShow(false);
    }

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

    return (
        <div ref={ref} className={"absolute top-0 right-0"}>
            <IoMdSettings className={"h-6 w-6 cursor-pointer"} onClick={showOptions} />
            {show && (
                <div className={"absolute top-8 right-0 border border-black p-2 rounded-lg bg-gray-600 opacity-95"}>
                    {/*<button className={"block w-full text-left p-1 select-none"}>Rename</button>*/}
                    <button className={"block text-left p-1 select-none hover:opacity-70 text-white"}
                            onClick={onDelete}>Delete</button>
                </div>
            )}
        </div>
    )
}