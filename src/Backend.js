import { BoardJs } from "./BoardJS";

//set square color to original
export const setSquaresColors=()=>{
    for(let row of BoardJs){
        for(let square of row){
            const btn = document.getElementById(square.arraySquare);
            btn.style.backgroundColor = square.squareColor;
        }
    }
}


//pieces moves 
export const knightMoves = (position,pieceColor) => {
    // Define the potential moves for the knight
    const moves = [
        [-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]
    ];

    const validKnightMoves = [];

    // Calculate the new positions for each potential move
    for (let move of moves) {
        const newX = parseInt(position[0]) + move[0];
        const newY = parseInt(position[1]) + move[1];
        
        if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
            const color =BoardJs[newX][newY].piece;
            //check if there is same color piece on valid move square           
            //cant go on pieces of the same color
            if(color[0]!==pieceColor){
                validKnightMoves.push([newX, newY]);
            }    
        }
    }
    return validKnightMoves;
}






