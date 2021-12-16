import React, {useState} from "react";
import Square from "./Square";
import TimeTravelButton from "./TimeTravelButton";

export default function Board(props) {

    let [isX, setRound] = useState(true);

    let [record, updateRecord] = useState([[null]]);

    let [step, updateStep] = useState(0);

    let [board, updateBoard] = useState([
        { id: 0, value: null },
        { id: 1, value: null },
        { id: 2, value: null },
        { id: 3, value: null },
        { id: 4, value: null },
        { id: 5, value: null },
        { id: 6, value: null },
        { id: 7, value: null },
        { id: 8, value: null },
    ]);

    let [buttonGroup, updateButtonGroup] = useState([
        {id:0, text:"Start Game"},
    ]);

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
        let nextStep = step + 1;
        updateStep(nextStep);
        board[position].value = marker;
        updateBoard(board);
        record = [...record, JSON.parse(JSON.stringify(board))];
        updateRecord(record);
        let newButton = { id: nextStep, text: "Move #" + nextStep};
        buttonGroup = [...buttonGroup, newButton];
        updateButtonGroup(buttonGroup);
    };

    let timeTravel = function (position) {
        for (let i = 0; i < 9; i++) {
            if (position === 0) {
                board[i].value = null;
            } else {
                board[i].value = record[position][i].value;
            }
            
        }
        updateBoard(board.slice());
        
    };

    let decideWinner = function () {
        if (board[0].value !== null) {
            if ((board[0].value === board[1].value &&
                board[0].value === board[2].value) ||
                (board[0].value === board[3].value &&
                    board[0].value === board[6].value) ||
                (board[0].value === board[4].value &&
                board[0].value === board[8].value)) {
                return board[0].value;
            }
        }

        if (board[1].value !== null) {
            if (board[1].value === board[4].value &&
                    board[1].value === board[7].value) {
                return board[1].value;
            }
        }

        if (board[2].value !== null) {
            if ((board[2].value === board[5].value &&
                board[2].value === board[8].value) ||
                (board[2].value === board[4].value &&
                board[2].value === board[6].value)) {
                return board[2].value;
            }
        }

        if (board[3].value !== null) {
            if (board[3].value === board[4].value &&
                board[3].value === board[5].value) {
                return board[3].value;
            }
        }

        if (board[6].value !== null) {
            if (board[6].value === board[7].value &&
                board[6].value === board[8].value) {
                return board[6].value;
            }
        }
        
        return null;
    };

    let mark = function (position) {
        if (board[position].value === null) {
            if (isX) {
                board[position].value = "X";
                updateBoard(board);
            } else {
                board[position].value = "O";
                updateBoard(board);
            }
            handleChange(position);
        }
    };

    return (
        <div>
            <div style={myStyle}>
                {board.map(square => <Square id={square.id} key={square.id} handleClick={mark} isX={isX} value={square.value} />)}
            </div>
            {buttonGroup.map(button => <TimeTravelButton id={button.id} key={button.id} text={button.text} handleClick={timeTravel} />)}
        </div>
        );
}