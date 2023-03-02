import Square from "../Square/Square";
import {BoardJs} from "../BoardJS";
import React from "react";
import audio from '../assets/sounds/moan.mp3';

function Board() {
  //re-render after each move
  //CALLED FROM THE CHILD
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  new Audio(audio).play();
 
  
  return (
    <>
    {BoardJs.map((row, index) => {
console.log("view")
      return (
        <div className="row" key={row[0].arraySquare} >
          {row.map((square, sIndex) => {
            return (
              <>
              <Square key={square.squarePosition}  square={square} color={square.squareColor} position={square.squarePosition} piece={square.piece} arraySquare={square.arraySquare} rerender={forceUpdate} ></Square>
              </>
              
            );
             
          })}
        </div>
      );
    })}
    
    </>
    
  );
 
}

export default Board;
