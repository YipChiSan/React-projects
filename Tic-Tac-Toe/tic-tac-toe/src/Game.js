import React from "react";
import Board from "./Board";

export default function Game() {

    let board = new Array(9);

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
    }

    return (
        <Board />
    );
}