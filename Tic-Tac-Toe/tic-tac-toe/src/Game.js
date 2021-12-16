import React, {useState} from "react";
import Board from "./Board";


export default function Game() {

    const [winner, updateWinner] = useState(null);

    const myStyle = {
        textAlign: "center",
    };

    let haveWinner = function (person) {

        updateWinner(person);
        
    }

    return (
        <div>
            <div style={myStyle}>{(winner !== null) ? "Our winner is "+ winner : "Our winner is"}</div>
            <Board haveWinner={haveWinner} />
            
        </div>
    );
}