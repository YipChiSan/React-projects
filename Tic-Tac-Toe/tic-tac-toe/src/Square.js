import React, { useState } from "react";

export default function Square(props) {

    const [value, setOccupier] = useState("none");
    

    const squareStyle = {
        border: "solid",
        fontSize: "100px",
        textAlign: "center",
    };

    const mark = function (e) {
        let marker;
        if (e.currentTarget.getAttribute("value") === "none") {
            
            if (props.isX) {
                marker = "X";
            }
            else {
                marker = "O";
            }
            e.target.textContent = marker;
            setOccupier(marker);
            props.aftermarking();
            
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