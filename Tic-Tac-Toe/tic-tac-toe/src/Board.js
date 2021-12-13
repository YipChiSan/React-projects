import React from "react";
import Square from "./Square";

export default function Board() {

    const idList = Array.from(Array(9).keys());

    const myStyle = {
        marginLeft: "auto",
        marginRight: "auto",
        width: "500px",
        height: "500px",
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