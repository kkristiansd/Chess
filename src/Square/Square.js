import React from 'react';
import Piece from '../Piece/Piece';

import {
    setSquaresColors,
    knightMoves,
    bishopMoves,
    rookMoves,
    queenMoves,
    pawnMoves,
    kingMoves,
    isKingUnderAttack,
    getKingPosition,
    getValidMoves
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
            if (square.piece !== '' && moved == false && props.pieceColor == 'w') {
                setSquaresColors();

                // Save clicked square and change background color to red
                localStorage.setItem("squareClicked", square.arraySquare);
                localStorage.setItem("piece", square.piece);
                
                const btn = document.getElementById(square.arraySquare);
                btn.style.backgroundColor = 'red';
                
                const piece = square.piece.split('');
                const position = square.arraySquare.split('');
                
                const moves = {
                  n: knightMoves,
                  b: bishopMoves,
                  r: rookMoves,
                  q: queenMoves,
                  p: pawnMoves,
                  k: kingMoves
                };
                
                if (piece[1] in moves) {
                  const pieceMoves = moves[piece[1]](position, piece[0]);
                
                  // Show possible moves in green
                  for (let move of pieceMoves) {
                    const [x, y] = move.map(String);
                    const btn = document.getElementById(x + y);
                    btn.style.backgroundColor = goodPossibleColor;
                  }
                   // Check for checks
                   const kingPosition = getKingPosition(piece[0]);
                   console.log(piece[0])
                   const kingColor = piece[0];
                   const isCheck = isKingUnderAttack(kingPosition, kingColor);
                   
                   if (isCheck) {
                       // King is under attack, handle the check situation
                       // For example, you can show a message or apply special styling to the king piece
                       console.log("Check!");
                   }
                }
                
                moved = false;


            } else {
                //if press on square with no pieces
                setSquaresColors();
            }
        } else {
            if (square.piece !== '' && moved == false && props.pieceColor == 'b') {
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
                const moves = {
                    n: knightMoves,
                    b: bishopMoves,
                    r: rookMoves,
                    q: queenMoves,
                    p: pawnMoves,
                    k: kingMoves
                };

                if (piece[1] in moves) {
                    const pieceMoves = moves[piece[1]](position, piece[0]);

                    for (let move of pieceMoves) {
                        const x = move[0].toString();
                        const y = move[1].toString();
                        const btn = document.getElementById(x + y);
                        btn.style.backgroundColor = goodPossibleColor;
                    }
                    // Check for checks
                    const kingPosition = getKingPosition(piece[0]);
                    console.log(piece[0])
                    const kingColor = piece[0];
                    const isCheck = isKingUnderAttack(kingPosition, kingColor);
                    
                    if (isCheck) {
                        // King is under attack, handle the check situation
                        // For example, you can show a message or apply special styling to the king piece
                        console.log("Check!");
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
            <Piece piece={props.piece} square={props.square} boardFlip={props.boardFlip} ></Piece>

        </div>
    );

}
export default Square;  