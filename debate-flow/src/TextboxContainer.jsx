

function TextboxContainer() {
    const styles = {
        // make a flexbox container for the textboxes
        display: "flex",
        flexDirection: "row",
        alignItems: "left",
        justifyContent: "left",

    }

    return (
        <div>
            <div style={styles} id="textbox-container"></div>
        </div>
      );
    }

export default TextboxContainer;