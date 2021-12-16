import React from "react";
import Board from "./Board";
import ReactDOM from 'react-dom';

export default function Game() {

    const myStyle = {
        textAlign: "center",
    };

    let haveWinner = function (person) {

        let declaration = <h2>{"Our winner is " + person}</h2>;
        ReactDOM.render(declaration, document.getElementById('declaration'));
    }

    return (
        <div>
            <Board haveWinner={haveWinner} />
            <div style={myStyle} id="declaration"></div>
        </div>
    );
}