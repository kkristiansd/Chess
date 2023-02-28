import React from 'react';
import Piece from '../Piece/Piece';
import { 
    setSquaresColors,
    knightMoves  
    } from "../Backend";

function Square(props) {


    const selectInitialSquare = (square) => {
        //if clicked on a piece 
        if (square.piece !== '') {
            setSquaresColors();
            //check if there is previous square selected to change background color to original
            if (localStorage.getItem("squareClicked") !== null) {
                const btn = document.getElementById(localStorage.getItem("squareClicked"));
                btn.style.backgroundColor = localStorage.getItem("squareClickedColor");

            }
            //save clicked square and change background color red
            localStorage.setItem("squareClicked", square.arraySquare);
            localStorage.setItem("squareClickedColor", square.squareColor);
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


            if (piece[1] === 'n') {
                const position = square.arraySquare.split('');
                //this will return an array of possible moves
                const kMoves=knightMoves(position,piece[0]);
           
                //SHOW POSSIBLE MOVES IN GREEN
                for (let moves of kMoves) {
                    const x = moves[0].toString();
                    const y = moves[1].toString();
                    const btn = document.getElementById(x+y);
                    btn.style.backgroundColor = 'green'; 
                }

            }else if(piece[1] === 'p' ){
                    //put your stuff in  here
            }
        }else{
            //if press on square with no pieces
            setSquaresColors();
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