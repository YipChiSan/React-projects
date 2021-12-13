import React, { useState } from "react";

export default function Square(props) {

    const [value, setOccupier] = useState("none");

    const myStyle = {
        border: "solid",
        
    };

    const mark = function (e) {
        
        
        if (e.currentTarget.getAttribute("value") === "none") {
            e.target.textContent = "X";
            setOccupier("X");
            
        }

        
    }

    return (
        <div
            style={myStyle}
            id={props.id}
            value={value}
            onClick={mark}
            key={props.id}
        >
            &nbsp;
        </div>

        
        );
}