import React from "react";

export default function Square(props) {

    const squareStyle = {
        border: "solid",
        fontSize: "100px",
        textAlign: "center",
    };

    const mark = function () {
        props.handleClick(props.id);
    };

    

    return (
        <div
            style={squareStyle}
            id={props.id}
            value={props.value}
            onClick={mark}
            key={props.id}
        >
            {(props.value !== null) ? props.value : '\u00A0'}
        </div>

        
        );
}