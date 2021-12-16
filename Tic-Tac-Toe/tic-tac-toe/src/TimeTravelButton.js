import React from "react";

export default function TimeTravelButton(props) {

    const myStyle = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    };

    let handleClick = function () {
        props.handleClick(props.id);
    };

    return (
        <button style={myStyle} type="button" onClick={handleClick}>{props.text}</button>
        );
}