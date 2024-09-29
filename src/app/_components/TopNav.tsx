import Image from "next/image";

export default function TopNav() {
    return (
        <nav className="flex w-full items-center justify-between bg-black text-white p-4 text-2xl font-semibold
        border-b">
            <div>
                <a href="/" className={"flex flex-row space-x-3 justify-center items-center"}>
                    <Image src="/flowlogo.png" alt="Flow Logo" width={35} height={35}/>
                    <p>Flow</p></a>
            </div>
            <div>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    );
}