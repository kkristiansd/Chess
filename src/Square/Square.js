import React from 'react';
import Piece from '../Piece/Piece';

import {
    setSquaresColors,
    knightMoves,
    bishopMoves,
    rookMoves,
    queenMoves,
    pawnMoves,
    kingMoves
} from "../Backend";
import { BoardJs } from "../BoardJS";


function Square(props) {
    const [whiteToMove, setWhiteToMove] = React.useState(true);
    const goodPossibleColor = "green";

    const selectInitialSquare = (square) => {
        let moved = false;
        //move the piece
        if (goodPossibleColor === document.getElementById(square.arraySquare).style.backgroundColor) {

            //delete the piece from prev square
            const squarer = localStorage.getItem("squareClicked");
            const arrayPosDel = squarer.split('');
            BoardJs[arrayPosDel[0]][arrayPosDel[1]].piece = "";

            //move the piece
            const pos = square.arraySquare.split('');
            BoardJs[pos[0]][pos[1]].piece = localStorage.getItem("piece");

            props.changeMove();
            props.rerender(BoardJs);
            moved = true;


        }

    
        if (props.move) {
                //if clicked on a piece
            if (square.piece !== '' && moved == false && props.pieceColor=='w') {
                setSquaresColors();

                //save clicked square and change background color red
                localStorage.setItem("squareClicked", square.arraySquare);
                localStorage.setItem("piece", square.piece);

                const btn = document.getElementById(square.arraySquare);
                btn.style.backgroundColor = 'red';

                //here check what piece was clicked and give the possible moves
                //get position

                //get piece
                const piece = square.piece.split('');
                // example 
                //'br' -> Black Rook
                // peice[1] -> rook
                //'wn' -> White Night *knight

                const position = square.arraySquare.split('');
                //knight
                if (piece[1] === 'n') {

                    //this will return an array of possible moves
                    const kMoves = knightMoves(position, piece[0]);

                    //SHOW POSSIBLE MOVES IN GREEN
                    for (let moves of kMoves) {
                        const x = moves[0].toString();
                        const y = moves[1].toString();
                        const btn = document.getElementById(x + y);
                        btn.style.backgroundColor = goodPossibleColor;
                    }
                    //bishop
                } else if (piece[1] === 'b') {

                    //this will return an array of possible moves
                    const bMoves = bishopMoves(position, piece[0]);

                    //SHOW POSSIBLE MOVES IN GREEN
                    for (let moves of bMoves) {
                        const x = moves[0].toString();
                        const y = moves[1].toString();
                        const btn = document.getElementById(x + y);
                        btn.style.backgroundColor = goodPossibleColor;
                    }
                } else if (piece[1] === 'r') {

                    //this will return an array of possible moves
                    const rMoves = rookMoves(position, piece[0]);

                    //SHOW POSSIBLE MOVES IN GREEN
                    for (let moves of rMoves) {
                        const x = moves[0].toString();
                        const y = moves[1].toString();
                        const btn = document.getElementById(x + y);
                        btn.style.backgroundColor = goodPossibleColor;
                    }
                } else if (piece[1] === 'q') {

                    //this will return an array of possible moves
                    const rMoves = queenMoves(position, piece[0]);

                    //SHOW POSSIBLE MOVES IN GREEN
                    for (let moves of rMoves) {
                        const x = moves[0].toString();
                        const y = moves[1].toString();
                        const btn = document.getElementById(x + y);
                        btn.style.backgroundColor = goodPossibleColor;
                    }
                } else if (piece[1] === 'p') {

                    //this will return an array of possible moves
                    const rMoves = pawnMoves(position, piece[0]);

                    //SHOW POSSIBLE MOVES IN GREEN
                    for (let moves of rMoves) {
                        const x = moves[0].toString();
                        const y = moves[1].toString();
                        const btn = document.getElementById(x + y);
                        btn.style.backgroundColor = goodPossibleColor;

                    }
                } else if (piece[1] === 'k') {

                    //this will return an array of possible moves
                    const kMoves = kingMoves(position, piece[0]);

                    //SHOW POSSIBLE MOVES IN GREEN
                    for (let moves of kMoves) {
                        const x = moves[0].toString();
                        const y = moves[1].toString();
                        const btn = document.getElementById(x + y);
                        btn.style.backgroundColor = goodPossibleColor;
                    }
                }
                moved = false;
                
              
            } else {
                //if press on square with no pieces
                setSquaresColors();
            }
        }else{
            if (square.piece !== '' && moved == false && props.pieceColor=='b') {
                setSquaresColors();

                //save clicked square and change background color red
                localStorage.setItem("squareClicked", square.arraySquare);
                localStorage.setItem("piece", square.piece);

                const btn = document.getElementById(square.arraySquare);
                btn.style.backgroundColor = 'red';

                //here check what piece was clicked and give the possible moves
                //get position

                //get piece
                const piece = square.piece.split('');
                // example 
                //'br' -> Black Rook
                // peice[1] -> rook
                //'wn' -> White Night *knight

                const position = square.arraySquare.split('');
                //knight
                if (piece[1] === 'n') {

                    //this will return an array of possible moves
                    const kMoves = knightMoves(position, piece[0]);

                    //SHOW POSSIBLE MOVES IN GREEN
                    for (let moves of kMoves) {
                        const x = moves[0].toString();
                        const y = moves[1].toString();
                        const btn = document.getElementById(x + y);
                        btn.style.backgroundColor = goodPossibleColor;
                    }
                    //bishop
                } else if (piece[1] === 'b') {

                    //this will return an array of possible moves
                    const bMoves = bishopMoves(position, piece[0]);

                    //SHOW POSSIBLE MOVES IN GREEN
                    for (let moves of bMoves) {
                        const x = moves[0].toString();
                        const y = moves[1].toString();
                        const btn = document.getElementById(x + y);
                        btn.style.backgroundColor = goodPossibleColor;
                    }
                } else if (piece[1] === 'r') {

                    //this will return an array of possible moves
                    const rMoves = rookMoves(position, piece[0]);

                    //SHOW POSSIBLE MOVES IN GREEN
                    for (let moves of rMoves) {
                        const x = moves[0].toString();
                        const y = moves[1].toString();
                        const btn = document.getElementById(x + y);
                        btn.style.backgroundColor = goodPossibleColor;
                    }
                } else if (piece[1] === 'q') {

                    //this will return an array of possible moves
                    const rMoves = queenMoves(position, piece[0]);

                    //SHOW POSSIBLE MOVES IN GREEN
                    for (let moves of rMoves) {
                        const x = moves[0].toString();
                        const y = moves[1].toString();
                        const btn = document.getElementById(x + y);
                        btn.style.backgroundColor = goodPossibleColor;
                    }
                } else if (piece[1] === 'p') {

                    //this will return an array of possible moves
                    const rMoves = pawnMoves(position, piece[0]);

                    //SHOW POSSIBLE MOVES IN GREEN
                    for (let moves of rMoves) {
                        const x = moves[0].toString();
                        const y = moves[1].toString();
                        const btn = document.getElementById(x + y);
                        btn.style.backgroundColor = goodPossibleColor;

                    }
                } else if (piece[1] === 'k') {

                    //this will return an array of possible moves
                    const kMoves = kingMoves(position, piece[0]);

                    //SHOW POSSIBLE MOVES IN GREEN
                    for (let moves of kMoves) {
                        const x = moves[0].toString();
                        const y = moves[1].toString();
                        const btn = document.getElementById(x + y);
                        btn.style.backgroundColor = goodPossibleColor;
                    }
                }
                moved = false;
                //props.changeMove(true);
            } else {
                //if press on square with no pieces
                setSquaresColors();
            }
        }

    };

    return (
        <div id={props.arraySquare} className={props.color} onClick={() => selectInitialSquare(props.square)} style={{ backgroundColor: props.color, width: 80, height: 80 }}>
            <Piece piece={props.piece} square={props.square} ></Piece>

        </div>
    );

}
export default Square;  