import React from "react";
import Square from "./Square";

export default function Board() {

    const idList = Array.from(Array(9).keys());

    const myStyle = {
        height: "200px",
        weight: "200px",
        display: "grid",
        gridGap: "1px",
        gridTemplateColumns: "repeat(3, 1fr)",
    };

    return (
        <div style={myStyle}>
            {idList.map(id => <Square id={id} key={id} />)}
        </div>
        );
}