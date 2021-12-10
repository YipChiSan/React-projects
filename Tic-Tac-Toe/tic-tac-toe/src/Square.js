import React from "react";

export default function Square(props) {
    const myStyle = {
        border: "solid",
    };

    return (
        <div style={myStyle} id={props.id} occupiedBy={props.occupier}>

        </div>
        );
}