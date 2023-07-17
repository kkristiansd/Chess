import {
    BoardJs
} from "./BoardJS";

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
    if (x >= 0 && x < 8 && y >= 0 && y < 8) {
      if (BoardJs[x][y].piece !== '') {
        return BoardJs[x][y];
      }
    }
    return false;
  };
const checkDiagonalMoves = (position, pieceColor, validMoves, direction) => {
    let newX = 0;
    let newY = 0;
    for (let i = 1; i <= 7; i++) {
        switch (direction) {
            case 'rb':
                newX = parseInt(position[0]) + i;
                newY = parseInt(position[1]) + i;
                break;
            case 'lt':
                newX = parseInt(position[0]) - i;
                newY = parseInt(position[1]) - i;
                break;
            case 'rt':
                newX = parseInt(position[0]) - i;
                newY = parseInt(position[1]) + i;
                break;
            case 'lb':
                newX = parseInt(position[0]) + i;
                newY = parseInt(position[1]) - i;
                break;
            default:
                console.log("typing error on diagonal movement");
        }
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
const checkLineMoves = (position, pieceColor, validMoves, direction) => {
    let newX = 0;
    let newY = 0;
    for (let i = 1; i <= 7; i++) {
        switch (direction) {
            case 't':
                 newX = parseInt(position[0]) - i;
                 newY = parseInt(position[1]);
                break;
            case 'b':
                 newX = parseInt(position[0]) + i;
                 newY = parseInt(position[1]);
                break;
            case 'l':
                 newX = parseInt(position[0]);
         newY = parseInt(position[1]) - i;
                break;
            case 'r':
                 newX = parseInt(position[0]);
                 newY = parseInt(position[1]) + i;
                break;
            default:
                console.log("typing error on LINE movement");
        }
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
//pieces moves 
export const kingMoves = (position, pieceColor) => {
    // Define the potential moves for the knight
    const moves = [[0,1],[0,-1],[1,0],[-1,0],[1, 1],[1, -1],[-1, -1],[-1, 1]];
    const validKingMoves = [];
    // Calculate the new positions for each potential move
    for (let move of moves) {
        const newX = parseInt(position[0]) + move[0];
        const newY = parseInt(position[1]) + move[1];
        if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
            const color = BoardJs[newX][newY].piece;
            //check if there is same color piece on valid move square           
            //cant go on pieces of the same color
            if (color[0] !== pieceColor) {
                validKingMoves.push([newX, newY]);
            }
        }
    }
    return validKingMoves;
}

export const knightMoves = (position, pieceColor) => {
    // Define the potential moves for the knight
    const moves = [[-2, -1],[-2, 1],[-1, -2],[-1, 2],[1, -2],[1, 2],[2, -1],[2, 1]];
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
    let validMoves = [];
    checkDiagonalMoves(position, pieceColor, validMoves, "rb");
    checkDiagonalMoves(position, pieceColor, validMoves, "lt");
    checkDiagonalMoves(position, pieceColor, validMoves, "rt");
    checkDiagonalMoves(position, pieceColor, validMoves, "lb");
    return validMoves;
}

export const rookMoves = (position, pieceColor) => {
    const validMoves = [];
    checkLineMoves(position, pieceColor, validMoves, "t");
    checkLineMoves(position, pieceColor, validMoves, "b");
    checkLineMoves(position, pieceColor, validMoves, "l");
    checkLineMoves(position, pieceColor, validMoves, "r");   
    return validMoves;
}

export const queenMoves = (position, pieceColor) => {
    const validMoves = [];
    //queen is just rock + bishop
    checkLineMoves(position, pieceColor, validMoves, "t");
    checkLineMoves(position, pieceColor, validMoves, "b");
    checkLineMoves(position, pieceColor, validMoves, "l");
    checkLineMoves(position, pieceColor, validMoves, "r");
    checkDiagonalMoves(position, pieceColor, validMoves, "rb");
    checkDiagonalMoves(position, pieceColor, validMoves, "lt");
    checkDiagonalMoves(position, pieceColor, validMoves, "rt");
    checkDiagonalMoves(position, pieceColor, validMoves, "lb");
    return validMoves;
}
export const pawnMoves = (position, pieceColor) => {
    const validMoves = [];
    const X = parseInt(position[0]);
    const Y = parseInt(position[1]);
  
    if ((X === 6 && pieceColor === "w") || (X === 1 && pieceColor === "b")) {
      if (pieceColor === "b") {
        const newX = X + 2;
        const newXX = X + 1;
        if (!checkPiece(newX, Y) && !checkPiece(newXX, Y)) {
          validMoves.push([newX, Y]);
          validMoves.push([newXX, Y]);
        }
      } else {
        const newX = X - 2;
        const newXX = X - 1;
        if (!checkPiece(newX, Y) && !checkPiece(newXX, Y)) {
          validMoves.push([newX, Y]);
          validMoves.push([newXX, Y]);
        }
      }
    } else {
      if (pieceColor === "b") {
        const newX = X + 1;
        if (!checkPiece(newX, Y) && !checkPiece(newX, Y)) {
          validMoves.push([newX, Y]);
        }
      } else {
        const newX = X - 1;
        if (!checkPiece(newX, Y) && !checkPiece(newX, Y)) {
          validMoves.push([newX, Y]);
        }
      }
    }
  
    if (pieceColor === "b" && checkPiece(X + 1, Y - 1)) {
      if (checkPiece(X + 1, Y - 1).piece[0] === "w") {
        const newX = X + 1;
        const newY = Y - 1;
        validMoves.push([newX, newY]);
      }
    }
  
    if (pieceColor === "b" && checkPiece(X + 1, Y + 1)) {
      if (checkPiece(X + 1, Y + 1).piece[0] === "w") {
        const newX = X + 1;
        const newY = Y + 1;
        validMoves.push([newX, newY]);
      }
    }
  
    if (pieceColor === "w" && checkPiece(X - 1, Y - 1)) {
      if (checkPiece(X - 1, Y - 1).piece[0] === "b") {
        const newX = X - 1;
        const newY = Y - 1;
        validMoves.push([newX, newY]);
      }
    }
  
    if (pieceColor === "w" && checkPiece(X - 1, Y + 1)) {
      if (checkPiece(X - 1, Y + 1).piece[0] === "b") {
        const newX = X - 1;
        const newY = Y + 1;
        validMoves.push([newX, newY]);
      }
    }
  
    return validMoves;
  };
  
  const getValidMoves = (piece, position, pieceColor) => {
    let validMoves = [];
  
    switch (piece[1]) {
      case "n": // Knight
        validMoves = knightMoves(position, pieceColor);
        break;
      case "b": // Bishop
        validMoves = bishopMoves(position, pieceColor);
        break;
      case "r": // Rook
        validMoves = rookMoves(position, pieceColor);
        break;
      case "q": // Queen
        validMoves = queenMoves(position, pieceColor);
        break;
      case "p": // Pawn
        validMoves = pawnMoves(position, pieceColor);
        break;
      case "k": // King
        validMoves = kingMoves(position, pieceColor);
        break;
      default:
        console.log("Invalid piece type");
    }
  
    return validMoves;
  };
  //checks
  export const getKingPosition = (color) => {
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const square = BoardJs[row][col];
        if (square.piece === color + "k") {
            console.log(row  + "/"+col) 
          return [row, col];
        }
      }
    }
    return null; // Return null if the king's position is not found
  };

  export const isKingUnderAttack = (kingPosition, kingColor) => {
    const opponentColor = kingColor === 'w' ? 'b' : 'w';
    
    // Check if any opponent piece can attack the king
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const piece = BoardJs[i][j].piece;
        if (piece) {
          const pieceColor = piece[0];
          if (pieceColor === opponentColor) {
            const validMoves = getValidMoves(piece, [i, j], pieceColor);
            for (let move of validMoves) {
              if (move[0] === kingPosition[0] && move[1] === kingPosition[1]) {
                return true;
              }
            }
          }
        }
      }
    }
  
    return false;
  };











