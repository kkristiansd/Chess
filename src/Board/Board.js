import Square from "../Square/Square";



function Board() {
  
  const board = [
    [{squareColor:'white',squarePosition:'a8',defaultPiece:'',piece:''}, "black", "white", "black","white", "black","white", "black"],
    ["black", "white", "black", "white","black", "white","black", "white"],
    ["white", "black", "white", "black","white", "black","white", "black"],
    ["black", "white", "black", "white","black", "white","black", "white"],
    ["white", "black", "white", "black","white", "black","white", "black"],
    ["black", "white", "black", "white","black", "white","black", "white"],
    ["white", "black", "white", "black","white", "black","white", "black"],
    ["black", "white", "black", "white","black", "white","black", "white"],
    ];
  return (
    <>
    {board.map((row, index) => {
      return (
        <div className="row">
          {row.map((square, sIndex) => {
            return (
              <>
              <Square color={square.squareColor}></Square>
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
