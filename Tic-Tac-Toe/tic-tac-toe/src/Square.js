import React, { useState } from "react";

export default function Square(props) {

    const [value, setOccupier] = useState("none");

    const squareStyle = {
        border: "solid",
        fontSize: "100px",
        textAlign: "center",
    };

    

    const mark = function (e) {
        
        if (e.currentTarget.getAttribute("value") === "none") {
            e.target.textContent = "X";
            setOccupier("X");
        }
    }

    return (
        <div
            style={squareStyle}
            id={props.id}
            value={value}
            onClick={mark}
            key={props.id}
        >
            &nbsp;
        </div>

        
        );
}