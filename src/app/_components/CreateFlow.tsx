import { useRouter } from 'next/navigation'

type flowProps = {
    title: string,
}

export default function CreateFlow(props: flowProps) {
    const router = useRouter()

    const onClick = () => {
        // when clicked, route to /flow
        router.push(`/flow?title=${props.title}`)

    }
    return (
        <div>
            <div className={"h-40 w-40 bg-purple-200 border border-black flex items-center justify-center " +
                "cursor-pointer hover:opacity-70 m-4 rounded-lg"}
                 onClick={onClick}>
                <p className={"font-bold text-center"}>
                    {props.title}</p>
            </div>
        </div>
    );

}