import { BoardJs } from "./BoardJS";

//set square color to original
export const setSquaresColors = () => {
    for (let row of BoardJs) {
        for (let square of row) {
            const btn = document.getElementById(square.arraySquare);
            btn.style.backgroundColor = square.squareColor;
        }
    }
}

const checkPiece = (x, y) => {
    if (BoardJs[x][y].piece != '') {
        return BoardJs[x][y];
    } else {
        return false;
    }
}

//pieces moves 
export const knightMoves = (position, pieceColor) => {
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
            const color = BoardJs[newX][newY].piece;
            //check if there is same color piece on valid move square           
            //cant go on pieces of the same color
            if (color[0] !== pieceColor) {
                validKnightMoves.push([newX, newY]);
            }
        }
    }
    return validKnightMoves;
}

export const bishopMoves = (position, pieceColor) => {
    const validMoves = [];

    // Calculate bishop to right bottom
    for (let i = 1; i <= 7; i++) {
        const newX = parseInt(position[0]) + i;
        const newY = parseInt(position[1]) + i;
        // Check if the new position is within the bounds of the board
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            const checkIfPiece = checkPiece(newX, newY);
            if (checkIfPiece == false) {
                validMoves.push([newX, newY]);
            } else {
                const color = checkIfPiece.piece;
                if (color[0] !== pieceColor) {
                    validMoves.push([newX, newY]);
                }
                break;
            }

        } else {
            break;
        }
    }
    // Calculate bishop to left top
    for (let i = 1; i <= 7; i++) {
        const newX = parseInt(position[0]) - i;
        const newY = parseInt(position[1]) - i;
        // Check if the new position is within the bounds of the board
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            const checkIfPiece = checkPiece(newX, newY);
            if (checkIfPiece == false) {
                validMoves.push([newX, newY]);
            } else {
                const color = checkIfPiece.piece;
                if (color[0] !== pieceColor) {
                    validMoves.push([newX, newY]);
                }
                break;
            }
        }else {
            break;
        }
    }
      // Calculate bishop to left bottom
      for (let i = 1; i <= 7; i++) {
        const newX = parseInt(position[0]) + i;
        const newY = parseInt(position[1]) - i;
        // Check if the new position is within the bounds of the board
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            const checkIfPiece = checkPiece(newX, newY);
            if (checkIfPiece == false) {
                validMoves.push([newX, newY]);
            } else {
                const color = checkIfPiece.piece;
                if (color[0] !== pieceColor) {
                    validMoves.push([newX, newY]);
                }
                break;
            }

        }else {
            break;
        }
    }
    // Calculate bishop to right top
    for (let i = 1; i <= 7; i++) {
        const newX = parseInt(position[0]) - i;
        const newY = parseInt(position[1]) + i; 
        // Check if the new position is within the bounds of the board
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            const checkIfPiece = checkPiece(newX, newY);
            if (checkIfPiece == false) {
                validMoves.push([newX, newY]);
            } else {
                const color = checkIfPiece.piece;
                if (color[0] !== pieceColor) {
                    validMoves.push([newX, newY]);
                }
                break;
            }

        }else {
            break;
        }
    }

    return validMoves;
}


export const rookMoves = (position, pieceColor) => {
    const validMoves = [];

    // Calculate rook to top to rook
    for (let i = 1; i <= 7; i++) {
        const newX = parseInt(position[0])-i;
        const newY = parseInt(position[1]);
        // Check if the new position is within the bounds of the board
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            const checkIfPiece = checkPiece(newX, newY);
            if (checkIfPiece == false) {
                validMoves.push([newX, newY]);
            } else {
                const color = checkIfPiece.piece;
                if (color[0] !== pieceColor) {
                    validMoves.push([newX, newY]);
                }
                break;
            }

        } else {
            break;
        }
    }
    // Calculate rook to donw to rook
    for (let i = 1; i <= 7; i++) {
        const newX = parseInt(position[0])+i;
        const newY = parseInt(position[1]);
        // Check if the new position is within the bounds of the board
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            const checkIfPiece = checkPiece(newX, newY);
            if (checkIfPiece == false) {
                validMoves.push([newX, newY]);
            } else {
                const color = checkIfPiece.piece;
                if (color[0] !== pieceColor) {
                    validMoves.push([newX, newY]);
                }
                break;
            }

        } else {
            break;
        }
    }
     // Calculate rook to left to rook
     for (let i = 1; i <= 7; i++) {
        const newX = parseInt(position[0]);
        const newY = parseInt(position[1])-i;
        // Check if the new position is within the bounds of the board
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            const checkIfPiece = checkPiece(newX, newY);
            if (checkIfPiece == false) {
                validMoves.push([newX, newY]);
            } else {
                const color = checkIfPiece.piece;
                if (color[0] !== pieceColor) {
                    validMoves.push([newX, newY]);
                }
                break;
            }

        } else {
            break;
        }
    }
     // Calculate rook to right to rook
     for (let i = 1; i <= 7; i++) {
        const newX = parseInt(position[0]);
        const newY = parseInt(position[1])+i;
        // Check if the new position is within the bounds of the board
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            const checkIfPiece = checkPiece(newX, newY);
            if (checkIfPiece == false) {
                validMoves.push([newX, newY]);
            } else {
                const color = checkIfPiece.piece;
                if (color[0] !== pieceColor) {
                    validMoves.push([newX, newY]);
                }
                break;
            }

        } else {
            break;
        }
    }

    return validMoves;
}

export const pawnMoves = (position, pieceColor)=>{
    const validMoves = [];

    //Define the pawn position
    const X = parseInt(position[0]);
    const Y = parseInt(position[1]);
    //Define pawns possible starting moves
    if((X==6&&pieceColor=='w') || (X==1&&pieceColor=='b')  ){
        if(pieceColor == 'b'){
              const newX = parseInt(position[0])+2;
              const newXX = parseInt(position[0])+1;
                validMoves.push([newX, Y]);
                validMoves.push([newXX, Y]);
            
        }else{
            const newX = parseInt(position[0])-2;
            const newXX = parseInt(position[0])-1;
            validMoves.push([newX, Y]);
            validMoves.push([newXX, Y]);
        }     
    }  
     if(pieceColor == 'b'){
        const newX = parseInt(position[0])+1;
        validMoves.push([newX, Y]);   
        }else{
    const newX = parseInt(position[0])-1;
    validMoves.push([newX, Y]);
  }
     //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    //==========================================================================================================
    /*
        this is what you are doing:
                    ((position[1])-1).checkPiece == true
        some BullShit

        the 'checkPiece' function takes in 2 parameters (X,Y)

        it is going to CHECK if there is any piece in does coordinates

        if there IS a piece there:
            returns the piece,  dosent care if the piece is white or black 
        else:
            returns false 


        CORRECT WAY

        X= current X position of clicked piece
        Y= current Y position of clicked piece

        checkPiece(X,Y)

        this will return the piece in the position X,Y which is the peace you pressed on

        HOW TO FIND ENIMIE PIECE??

        PAWN can only take a piece if its on the other team 
        AND 
        if that piece it 1 UP and to the RIGHT or 1 UP and to the LEFT 
        
        so....

        
         checkPiece(X+1,Y+1)

         PS.: you have to mess around with the plus sign depending on if the peace is black or white 
         and if its taking to the right or left


        SOLUTION FOR THE BLACK PAWN TO TAKE TOP RIGHT ON LAST LINE OF THIS PAGE

        ONLY USE IT IN LAST CASE SCENARIO
    */


    //==========================================================================================================
    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

 
  //allow black pawn to take top right 
  if(pieceColor == 'b' /*&& ((position[1])-1).checkPiece == true*/){
        const newX = parseInt(position[0])+1;
        const newY = parseInt(position[1])-1;
        validMoves.push([newX, newY]);   
    }
//allow black pawn to take top left
    if(pieceColor == 'b' /*&& ((position[1])-1).checkPiece == true*/){
        const newX = parseInt(position[0])+1;
        const newY = parseInt(position[1])+1;
        validMoves.push([newX, newY]);   
    }
//allow white pawn to take top left 
    if(pieceColor == 'w' /*&& ((position[1])-1).checkPiece == true*/){
        const newX = parseInt(position[0])-1;
        const newY = parseInt(position[1])-1;
        validMoves.push([newX, newY]);   
    }
    //allow white pawn to take top right 
    if(pieceColor == 'w' /*&& ((position[1])-1).checkPiece == true*/){
        const newX = parseInt(position[0])-1;
        const newY = parseInt(position[1])+1;
        validMoves.push([newX, newY]);   
    }

    return validMoves;

}



export const queenMoves = (position, pieceColor) => {
    const validMoves = [];

    // Calculate  top to queen
    for (let i = 1; i <= 7; i++) {
        const newX = parseInt(position[0])-i;
        const newY = parseInt(position[1]);
        // Check if the new position is within the bounds of the board
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            const checkIfPiece = checkPiece(newX, newY);
            if (checkIfPiece == false) {
                validMoves.push([newX, newY]);
            } else {
                const color = checkIfPiece.piece;
                if (color[0] !== pieceColor) {
                    validMoves.push([newX, newY]);
                }
                break;
            }

        } else {
            break;
        }
    }
    // Calculate  donw to queen
    for (let i = 1; i <= 7; i++) {
        const newX = parseInt(position[0])+i;
        const newY = parseInt(position[1]);
        // Check if the new position is within the bounds of the board
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            const checkIfPiece = checkPiece(newX, newY);
            if (checkIfPiece == false) {
                validMoves.push([newX, newY]);
            } else {
                const color = checkIfPiece.piece;
                if (color[0] !== pieceColor) {
                    validMoves.push([newX, newY]);
                }
                break;
            }

        } else {
            break;
        }
    }
     // Calculate  left to queen
     for (let i = 1; i <= 7; i++) {
        const newX = parseInt(position[0]);
        const newY = parseInt(position[1])-i;
        // Check if the new position is within the bounds of the board
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            const checkIfPiece = checkPiece(newX, newY);
            if (checkIfPiece == false) {
                validMoves.push([newX, newY]);
            } else {
                const color = checkIfPiece.piece;
                if (color[0] !== pieceColor) {
                    validMoves.push([newX, newY]);
                }
                break;
            }

        } else {
            break;
        }
    }
     // Calculate  right to queen
     for (let i = 1; i <= 7; i++) {
        const newX = parseInt(position[0]);
        const newY = parseInt(position[1])+i;
        // Check if the new position is within the bounds of the board
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            const checkIfPiece = checkPiece(newX, newY);
            if (checkIfPiece == false) {
                validMoves.push([newX, newY]);
            } else {
                const color = checkIfPiece.piece;
                if (color[0] !== pieceColor) {
                    validMoves.push([newX, newY]);
                }
                break;
            }

        } else {
            break;
        }
    }


// Calculate queen to right bottom
    for (let i = 1; i <= 7; i++) {
        const newX = parseInt(position[0]) + i;
        const newY = parseInt(position[1]) + i;
        // Check if the new position is within the bounds of the board
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            const checkIfPiece = checkPiece(newX, newY);
            if (checkIfPiece == false) {
                validMoves.push([newX, newY]);
            } else {
                const color = checkIfPiece.piece;
                if (color[0] !== pieceColor) {
                    validMoves.push([newX, newY]);
                }
                break;
            }

        } else {
            break;
        }
    }
    // Calculate queen to left top
    for (let i = 1; i <= 7; i++) {
        const newX = parseInt(position[0]) - i;
        const newY = parseInt(position[1]) - i;
        // Check if the new position is within the bounds of the board
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            const checkIfPiece = checkPiece(newX, newY);
            if (checkIfPiece == false) {
                validMoves.push([newX, newY]);
            } else {
                const color = checkIfPiece.piece;
                if (color[0] !== pieceColor) {
                    validMoves.push([newX, newY]);
                }
                break;
            }
        }else {
            break;
        }
    }
      // Calculate queen to left bottom
      for (let i = 1; i <= 7; i++) {
        const newX = parseInt(position[0]) + i;
        const newY = parseInt(position[1]) - i;
        // Check if the new position is within the bounds of the board
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            const checkIfPiece = checkPiece(newX, newY);
            if (checkIfPiece == false) {
                validMoves.push([newX, newY]);
            } else {
                const color = checkIfPiece.piece;
                if (color[0] !== pieceColor) {
                    validMoves.push([newX, newY]);
                }
                break;
            }

        }else {
            break;
        }
    }
    // Calculate queen to right top
    for (let i = 1; i <= 7; i++) {
        const newX = parseInt(position[0]) - i;
        const newY = parseInt(position[1]) + i; 
        // Check if the new position is within the bounds of the board
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            const checkIfPiece = checkPiece(newX, newY);
            if (checkIfPiece == false) {
                validMoves.push([newX, newY]);
            } else {
                const color = checkIfPiece.piece;
                if (color[0] !== pieceColor) {
                    validMoves.push([newX, newY]);
                }
                break;
            }

        }else {
            break;
        }
    }

    return validMoves;
}







//IF YOU ARE READING THIS IT MEANS YOUR A BOT

/*

   //allow black pawn to take top right 
    if (pieceColor == 'b' && checkPiece(X + 1, Y - 1) != false) {
        const color = checkPiece(X + 1, Y - 1).piece;
        //THIS IF WILL MAKE SURE THAT THE PIECE CANT EAT ITS ONW PIECES
        if (color[0] !== pieceColor) {
            const newX = parseInt(position[0]) + 1;
            const newY = parseInt(position[1]) - 1;
            validMoves.push([newX, newY]);
        }

    }

 */

