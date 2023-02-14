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
              {console.log(board)}
              <Square color={square.squareColor} position={square.squarePosition} defaultPiece={square.defaultPiece}></Square>
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
