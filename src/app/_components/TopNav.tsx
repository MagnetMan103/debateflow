

export default function TopNav() {
    return (
        <nav className="flex w-full items-center justify-between bg-blue-500 text-white p-4 text-2xl font-semibold
        border-b">
            <div>
                <a href="/">Flow</a>
            </div>
            <div>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    );
}