import React from 'react';
import Piece from '../Piece/Piece';

import { BoardJs } from "../BoardJS";
function Square(props) {


    const selectInitialSquare = (square) => {
        //if clicked on a piece 
        if (square.piece != '') {
            //check if there is previous square selected to change background color to original
            if (localStorage.getItem("squareClicked") != null) {
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
            //'br' -> black rook
            // peice[1] -> rook
            //'wn' -> white night *knight


            if (piece[1] == 'n') {
                // Define the potential moves for the knight
                const moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]
                ];

                const validKnightMoves = [];

                // Calculate the new positions for each potential move
                const position = square.arraySquare.split('');
                for (let move of moves) {
                    const newX = parseInt(position[0]) + move[0];
                    const newY = parseInt(position[1]) + move[1];
                    console.log(position[0]+"|||"+position[1])
                    console.log(newX+"|"+newY)
                    if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
                        validKnightMoves.push([newX, newY]);
                    }
                }
                console.log(validKnightMoves);
                

            }else if(piece[1] == 'p'){
                    //put your stuff in  here
            }
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