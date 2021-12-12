import React from "react";
import Square from "./Square";

export default function Board() {

    const idList = Array.from(Array(9).keys());

    const squareList = idList.map(id => (<Square id={ id } />));

    return (
        <ul>
            {squareList}
        </ul>
        );
}