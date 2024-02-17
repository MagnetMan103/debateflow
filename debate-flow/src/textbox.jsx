import PropTypes from "prop-types";
function Textbox(props){
    const styles = {
        backgroundColor:props.color

    }
    return (
        <textarea style={styles} className={"text"} placeholder={"Type Here"} rows={"50"} cols={"15"}>
        </textarea>
    );
}
Textbox.propTypes = {
    color: PropTypes.string
}
Textbox.defaultProps = {
    color: "white"
}
export default Textbox