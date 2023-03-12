import Square from "../Square/Square";
import {BoardJs} from "../BoardJS";
import React, { useState, useEffect } from 'react';
import './Board.css';
import audio from '../assets/sounds/moan.mp3';

function Board() {
  //re-render after each move
  //CALLED FROM THE CHILD
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  new Audio(audio).play();
  const [whiteToMove, setWhiteToMove] = useState(true);
  const [boardFlip, setBoardFlip] = useState(false);
  const changeMove =()=>{
    setWhiteToMove(!whiteToMove);
    setBoardFlip(!boardFlip);
  };
  const boardClass = boardFlip ? "boardFlipped" : "board";
  return (
    <div className={boardClass}>
    {BoardJs.map((row, index) => {
      return (
        <div className="row" key={row[0].arraySquare} >
          {row.map((square, sIndex) => {
            const pColor = square.piece;
            const pieceColor = pColor.split("");
            return (
              <>
              <Square key={square.squarePosition} pieceColor={pieceColor[0]} boardFlip={boardClass} move={whiteToMove}square={square} color={square.squareColor} position={square.squarePosition} piece={square.piece} arraySquare={square.arraySquare} rerender={forceUpdate} changeMove={changeMove} ></Square>
              </>
              
            );
             
          })}
        </div>
      );
    })}
    
    </div>
    
  );
 
}

export default Board;
