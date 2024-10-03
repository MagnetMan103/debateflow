import {useRouter} from "next/navigation";
import EditFlow from "~/app/_components/EditFlow";
import {type Dispatch, type SetStateAction} from "react";

export default function FlowPreview(props: {title: string, name: string, setItems:  Dispatch<SetStateAction<string[]>>}) {
    const router = useRouter()
    const onClick = () => {
        router.push(`/flow?${props.title}`)
    }
    return (
        <div>
        <div className={"relative h-40 w-40 m-4"}>
            <div className={"h-40 w-40 bg-green-200 border border-black flex" +
                "items-center justify-center " +
                "cursor-pointer hover:opacity-70 m-0 rounded-lg"}
                 onClick={onClick}
            >
                <p className={"font-bold text-center mt-4"}>
                    {props.title.substring(6, props.title.indexOf('_'))}</p>
                <p className={"text-center"}>{props.name}</p>
            </div>
            <EditFlow title={props.title} setItems={props.setItems}/>
        </div>
        </div>
    );
}