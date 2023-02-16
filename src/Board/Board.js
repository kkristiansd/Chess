import Square from "../Square/Square";
import {BoardJs} from "../BoardJS";
import { useState,useLayoutEffect } from "react";
import React from "react";


function Board() {
  //re-render after each move
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
 
 
 
  return (
    <>
    {BoardJs.map((row, index) => {
console.log("view")
      return (
        <div className="row" key={row[0].arraySquare} >
          {row.map((square, sIndex) => {
            return (
              <>
              <Square key={square.squarePosition}  color={square.squareColor} position={square.squarePosition} piece={square.piece} arraySquare={square.arraySquare} rerender={forceUpdate} ></Square>
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
