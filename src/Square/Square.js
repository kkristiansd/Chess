import React from 'react';
import Piece from '../Piece/Piece';

import {BoardJs} from "../BoardJS";
function Square(props) {
  
  
    const selectInitialSquare = (square) => { 
        //if clicked on a piece 
        if(square.piece!=''){
           
            localStorage.setItem("squareClicked", square.arraySquare);
            const btn = document.getElementById(square.arraySquare);
            btn.style.backgroundColor='red';
        }
     
        
     /*   const pos = square.arraySquare.split('');
    
     
        if(BoardJs[pos[0]][pos[1]].piece===""&& localStorage.getItem("piece")!=null){
            
            const square = localStorage.getItem("squareId");
            const btn = document.getElementById(square);
            btn.style.backgroundColor=btn.className;

            const arrayPosDel = square.split('');
            //console.log("bewfore "+BoardJs[arrayPosDel[0]][arrayPosDel[1]].piece)
            BoardJs[arrayPosDel[0]][arrayPosDel[1]].piece="";

            BoardJs[pos[0]][pos[1]].piece=localStorage.getItem("piece");
            //console.log("after "+BoardJs[pos[0]][pos[1]])
            localStorage.setItem("piece",null)
            localStorage.setItem("squareId", null);
            props.rerender(BoardJs);
        }else{
           
            //change back ground color
            document.getElementById(square.arraySquare).style.backgroundColor="red";
            //save the square in cache
            localStorage.setItem("squareId", square.arraySquare);
            localStorage.setItem("piece", square.piece);
        }*/
    };

    return (
        <div id={props.arraySquare} className={props.color} onClick={() => selectInitialSquare(props.square)} style={{ backgroundColor: props.color, width: 80, height: 80 }}>
            <Piece piece={props.piece} square={props.square} ></Piece>
        </div>
    );

}
export default Square;  