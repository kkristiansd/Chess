import React from 'react'
import wNight from '../../assets/whiteNight.png'
import bNight from '../../assets/blackNight.png'
function Night(props) {

    const knightMoves=(position) => {
        // Define the potential moves for the knight
        const moves = [    [-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]
        ];
        
        const validKnightMoves = [];
        
        // Calculate the new positions for each potential move
        for (let move of moves) {
          const newX = position[0] + move[0];
          const newY = position[1] + move[1];
          
          if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
            validKnightMoves.push([newX, newY]);
          }
        }
        
        return validKnightMoves;
      }
      
      // Example usage
      const position = [7,1]; // Starting position of the knight
      const validMoves = knightMoves(position);
      console.log(validMoves); // Print a list of valid moves

    if(props.piece==="wn"){
        return (
            <>
                        
            <img src={wNight} alt="white Night" width={70} height={70} style={{marginLeft:5,marginTop:4}} />
            </>
          ) 
    }else{
        return (
            <>
                        
            <img src={bNight} alt="black Night" width={70} height={70} style={{marginLeft:5,marginTop:4}} />
            </>
          )
    }
 
}

export default Night