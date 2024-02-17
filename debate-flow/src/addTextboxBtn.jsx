import Textbox from "./textbox.jsx";
import PropTypes from "prop-types";
import { createRoot } from 'react-dom/client';
import { useState, useEffect } from "react";

function AddTextboxBtn(props) {
    let [num, setNum] = useState(props.boxes);
    let fired = false

    useEffect(() => {
        if (fired) {return}
        fired = true;
        for (let i = 0; i < num; i++) {
            let textbox = document.createElement("div");
            textbox.width = 20;
            textbox.className = "textbox";
            document.getElementById("textbox-container").appendChild(textbox);
            const color = i % 2 === 0 ? "indianred" : "lightblue";
            createRoot(textbox).render(<Textbox color={color}/>);
        }
    }, []); // Empty dependency array to run effect only once after mount

    // const adjustTextboxSize = () => {
    //     if (num <= 6) { return }
    //     let textboxes = document.getElementsByClassName("textbox");
    //     for (let i = 0; i < textboxes.length; i++) {
    //         textboxes[i].style.width = `${100/num}%`;
    //     }
    // }

    const AddTextbox = () => {
        if (num === 8) {
            return;
        }
        setNum(num + 1);
        let textbox = document.createElement("div");
        textbox.width = 20;
        textbox.className = "textbox";
        document.getElementById("textbox-container").appendChild(textbox);
        const color = num % 2 === 0 ? "indianred" : "lightblue";
        createRoot(textbox).render(<Textbox color={color}/>);
        // adjustTextboxSize();
    }

    const RemoveTextbox = () => {
        if (num === 0) {
            return;
        }
        setNum(num - 1);
        let textbox = document.getElementById("textbox-container").lastChild;
        textbox.remove();
    }

    return (
        <div>
            <button onClick={AddTextbox}>Add Textbox</button>
            <button onClick={RemoveTextbox}>Remove Textbox</button>
        </div>
    );
}

AddTextboxBtn.defaultProps = {
    boxes: 1
}

AddTextboxBtn.propTypes = {
    boxes: PropTypes.number
}

export default AddTextboxBtn;
