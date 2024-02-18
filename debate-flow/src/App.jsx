import Textbox from "./textbox.jsx";
import AddTextboxBtn from "./addTextboxBtn.jsx";
import TextboxContainer from "./TextboxContainer.jsx";
import {useState} from "react";
import Header from "./Header.jsx";
function App() {
    let [clicked, setClick]= useState(false);
    let [boxes, setBox] = useState(1);
    const styles = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
    }
    const onClick = () => {
        setClick(true);
        console.log(boxes, 'boxes in app.2js')
        // check if document.getElementById("boxInput").value is a number
        if (isNaN(parseInt(document.getElementById("boxInput").value))) {
            console.log('hi')
            return
        }
        setBox(parseInt(document.getElementById("boxInput").value))
        // console.log(boxes)
    }
    if (!clicked) {
        return (
            <>
                <Header/>
                <div style={styles}>
                <input type={"text"} id={"boxInput"} style={{ width: "20px" }}></input>
                <button onClick={ onClick }>Create Flow</button>
                </div>
            </>
        );
    }

    if (clicked) {

        return (
            <>
                <TextboxContainer/>
                <AddTextboxBtn boxes={boxes}/>
            </>
        );
    }

}

export default App
