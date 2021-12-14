import React, {useState} from "react";
import Board from "./Board";
import ReactDOM from 'react-dom'

export default function Game() {

    const [winner, setWinner] = useState(null);

    let haveWinner = function (person) {
        setWinner(person);
        let declaration = <h2>{"Our winner is " + winner}</h2>;
        ReactDOM.render(declaration, document.getElementById('declaration'));
    }

    return (
        <div>
            <Board haveWinner={haveWinner} />
            <div id="declaration"></div>
        </div>
    );
}