import React, {useState} from "react";
import Square from "./Square";

export default function Board(props) {

    const [isX, setRound] = useState(true);

    let board = new Array(9);

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

    const handleChange = function (position) {
        if (isX) {
            modifiedBoard("X", position);
        } else {
            modifiedBoard("O", position);
        }

        let winner = decideWinner();
        
        if (winner !== null) {
            
            props.haveWinner(winner);
        }
        setRound(!isX);
    };

    let modifiedBoard = function (marker, position) {
        board[position] = marker;
    };

    let decideWinner = function () {
        for (let i = 0; i <= 6; i++) {
            if (board[i] !== undefined) {
                if (board[i] === board[i + 1] &&
                    board[i] === board[i + 2]) {
                    return board[i];
                }

                if (i + 6 < 9) {
                    if (board[i] === board[i + 3] &&
                        board[i] === board[i + 6]) {
                        return board[i];
                    }
                }

                if (i === 0 &&
                    board[i] === board[4] &&
                    board[i] === board[8]) {
                    return board[i];
                }

                if (i === 2 &&
                    board[i] === board[4] &&
                    board[i] === board[6]) {
                    return board[i];
                }
            }
        }
        return null;
    };

    

    return (
        <div style={myStyle}>
            {idList.map(id => <Square id={id} key={id} aftermarking={handleChange} isX={isX} />)}
        </div>
        );
}