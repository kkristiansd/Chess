import Square from "../Square/Square";
import BoardJson from "../BoardJson.json"



function Board() {
 
  const board = BoardJson;

  
  return (
    <>
    {board.map((row, index) => {
      return (
        <div className="row">
          {row.map((square, sIndex) => {
            return (
              <>
           

              <Square key={square.squarePosition}   color={square.squareColor} position={square.squarePosition} defaultPiece={square.defaultPiece} piece={square.piece}></Square>
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
