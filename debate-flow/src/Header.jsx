
function Header() {
    const styles = {
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    }
    return (
        <header style={styles}>
            <h1>Debate Flow</h1>
        </header>
    );
}

export default Header