import {useRouter} from "next/navigation";

export default function FlowPreview(props: {title: string}) {
    const router = useRouter()
    const onClick = () => {
        router.push(`/flow?${props.title}`)
    }
    return (
        <div>
            <div className={"h-40 w-40 bg-green-200 border border-black flex items-center justify-center " +
                "cursor-pointer hover:opacity-70 m-4 rounded-lg"}
                 onClick={onClick}
            >
                <p className={"font-bold text-center"}>
                    {props.title}</p>
            </div>
        </div>
    );

}