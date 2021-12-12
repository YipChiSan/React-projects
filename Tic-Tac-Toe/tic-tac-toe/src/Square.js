import React from "react";

export default function Square(props) {

    const [occupier, setOccupier] = useState("none");

    const myStyle = {
        border: "solid",
    };

    const mark = function (e) {
        if (e.target.occupiedBy == "none") {
            e.target.textContent = "X";
        }

        setOccupier("X");
    }

    return (
        <div
            style={myStyle}
            id={props.id}
            occupiedBy={occupier}
            onClick={mark}
        />

        
        );
}