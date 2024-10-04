export default function AboutPage() {
    return (
        <div className={"flex items-center justify-center"}>
        <div className="text-white p-4 max-w-[calc(80vw)]">
            <h1 className="text-6xl font-bold mb-4 text-center">About Flow</h1>
            <p className={"text-3xl"}>
                I made this website after judging debate tournaments for a couple years and
                realized it was very annoying to keep track of my flows. I also wanted a better
                way to make flows and be able to transition to the aff/neg flow quickly. On the flow page,
                I added a shortcut (shift + down arrow) that changes the side of the flow you are on
                to make it possible to flow with just your keyboard.
            </p>
            <p className="mt-10 text-3xl">
                Some features I still want to add include being able to share flows, being able to
                collaborate on the same flow, and more settings for preferences in terms of text size,
                or adding your own custom flow presets.
            </p>
        </div>
        </div>
    );
}