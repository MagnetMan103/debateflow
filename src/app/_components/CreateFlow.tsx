
type flowProps = {
    title: string,
}

export default function CreateFlow(props: flowProps) {
    const onClick = () => {
        // when clicked, route to /flow
        window.location.href = "/flow";

    }
    return (
        <div>
            <div className={"h-40 w-40 bg-purple-200 border border-black flex items-center justify-center cursor-pointer"}
                 onClick={onClick}>
                <p>
                    {props.title}</p>
            </div>
        </div>
    );

}