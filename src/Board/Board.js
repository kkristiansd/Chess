import Square from "../Square/Square";



function Board() {
  
  const board = [
    [{squareColor:'white',squarePosition:'a8',defaultPiece:'',piece:''}, {squareColor:'black', squarePosition:'b8', defaultPiece: '', piece:''}, {squareColor: 'white', squarePosition: 'c8', defaultPiece:'', piece:''}, {squareColor: 'black', squarePosition:'d8', defaultPiece:'', piece:''},{squareColor:'white', squarePosition: 'e8', defaultPiece:'',piece:''}, {squareColor:'black', squarePosition:'f8', defaultPiece: '', piece:''},{squareColor:'white', squarePosition:'g8', defaultPiece:'', piece:''}, {squareColor:'black', squarePosition:'h8', defaultPiece:'', piece:''}],
    [{squareColor:'black',squarePosition:'a7',defaultPiece:'bp',piece:''}, {squareColor:'white', squarePosition:'b7', defaultPiece: 'bp', piece:''}, {squareColor: 'black', squarePosition: 'c7', defaultPiece:'bp', piece:''}, {squareColor: 'white', squarePosition:'d7', defaultPiece:'bp', piece:''},{squareColor:'black', squarePosition: 'e7', defaultPiece:'bp',piece:''}, {squareColor:'white', squarePosition:'f7', defaultPiece: 'bp', piece:''},{squareColor:'black', squarePosition:'g7', defaultPiece:'bp', piece:''}, {squareColor:'white', squarePosition:'h7', defaultPiece:'bp', piece:''}],
    [{squareColor:'white',squarePosition:'a6',defaultPiece:'',piece:''}, {squareColor:'black', squarePosition:'b6', defaultPiece: '', piece:''}, {squareColor: 'white', squarePosition: 'c6', defaultPiece:'', piece:''}, {squareColor: 'black', squarePosition:'d6', defaultPiece:'', piece:''},{squareColor:'white', squarePosition: 'e6', defaultPiece:'',piece:''}, {squareColor:'black', squarePosition:'f6', defaultPiece: '', piece:''},{squareColor:'white', squarePosition:'g6', defaultPiece:'', piece:''}, {squareColor:'black', squarePosition:'h6', defaultPiece:'', piece:''}],
    [{squareColor:'black',squarePosition:'a5',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'b5',defaultPiece:'',piece:''}, {squareColor:'black',squarePosition:'c5',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'d5',defaultPiece:'',piece:''},{squareColor:'black',squarePosition:'e5',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'f5',defaultPiece:'',piece:''},{squareColor:'black',squarePosition:'g5',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'h5',defaultPiece:'',piece:''}],
    [{squareColor:'white',squarePosition:'a4',defaultPiece:'',piece:''}, {squareColor:'black',squarePosition:'b4',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'c4',defaultPiece:'',piece:''}, {squareColor:'black',squarePosition:'d4',defaultPiece:'',piece:''},{squareColor:'white',squarePosition:'e4',defaultPiece:'',piece:''}, {squareColor:'black',squarePosition:'f4',defaultPiece:'',piece:''},{squareColor:'white',squarePosition:'g4',defaultPiece:'',piece:''}, {squareColor:'black',squarePosition:'h4',defaultPiece:'',piece:''}],
    [{squareColor:'black',squarePosition:'a3',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'b3',defaultPiece:'',piece:''}, {squareColor:'black',squarePosition:'c3',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'d3',defaultPiece:'',piece:''},{squareColor:'black',squarePosition:'e3',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'f3',defaultPiece:'',piece:''},{squareColor:'black',squarePosition:'g3',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'h3',defaultPiece:'',piece:''}],
    [{squareColor:'white',squarePosition:'a2',defaultPiece:'wp',piece:'wp'}, {squareColor:'black',squarePosition:'b2',defaultPiece:'wp',piece:'wp'}, {squareColor:'white',squarePosition:'c2',defaultPiece:'wp',piece:'wp'}, {squareColor:'black',squarePosition:'d2',defaultPiece:'wp',piece:'wp'},{squareColor:'white',squarePosition:'e2',defaultPiece:'wp',piece:'wp'}, {squareColor:'black',squarePosition:'f2',defaultPiece:'wp',piece:'wp'},{squareColor:'white',squarePosition:'g2',defaultPiece:'wp',piece:'wp'}, {squareColor:'black',squarePosition:'h2',defaultPiece:'wp',piece:'wp'}],
    [{squareColor:'black',squarePosition:'a1',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'b1',defaultPiece:'',piece:''}, {squareColor:'black',squarePosition:'c1',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'d1',defaultPiece:'',piece:''},{squareColor:'black',squarePosition:'e1',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'f1',defaultPiece:'',piece:''},{squareColor:'black',squarePosition:'g1',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'h1',defaultPiece:'',piece:''}],
    ];
  return (
    <>
    {board.map((row, index) => {
      return (
        <div className="row">
          {row.map((square, sIndex) => {
            return (
              <>
              {console.log(square)}
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
