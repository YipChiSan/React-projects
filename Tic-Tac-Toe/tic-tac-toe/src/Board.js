import React, {useState} from "react";
import Square from "./Square";

export default function Board(props) {

    const [isX, setRound] = useState(true);

    const [board, updateBoard] = useState(new Array(9));

    const [record, updateRecord] = useState(new Array());

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
        console.log(winner);
        if (winner !== null) {
            
            props.haveWinner(winner);
        }
        setRound(!isX);
    };

    let modifiedBoard = function (marker, position) {
        
        board[position] = marker;
        updateBoard(board);
        record = [...record, board];
        updateRecord(record);
    };

    let decideWinner = function () {
        if (board[0] !== undefined) {
            if ((board[0] === board[1] &&
                board[0] === board[2]) ||
                (board[0] === board[3] &&
                    board[0] === board[6]) ||
                (board[0] === board[4] &&
                board[0] === board[8])) {
                return board[0];
            }
        }

        if (board[1] !== undefined) {
            if (board[1] === board[4] &&
                    board[1] === board[7]) {
                return board[1];
            }
        }

        if (board[2] !== undefined) {
            if ((board[2] === board[5] &&
                board[2] === board[8]) ||
                (board[2] === board[4] &&
                board[2] === board[6])) {
                return board[2];
            }
        }

        if (board[3] !== undefined) {
            if (board[3] === board[4] &&
                board[3] === board[5]) {
                return board[3];
            }
        }

        if (board[6] !== undefined) {
            if (board[6] === board[7] &&
                board[6] === board[8]) {
                return board[6];
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