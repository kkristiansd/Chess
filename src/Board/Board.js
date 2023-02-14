import Square from "../Square/Square";



function Board() {
  
  const board = [
    [{squareColor:'white',squarePosition:'a8',defaultPiece:'',piece:''}, {squareColor:'grey', squarePosition:'b8', defaultPiece: '', piece:''}, {squareColor: 'white', squarePosition: 'c8', defaultPiece:'', piece:''}, {squareColor: 'grey', squarePosition:'d8', defaultPiece:'', piece:''},{squareColor:'white', squarePosition: 'e8', defaultPiece:'',piece:''}, {squareColor:'grey', squarePosition:'f8', defaultPiece: '', piece:''},{squareColor:'white', squarePosition:'g8', defaultPiece:'', piece:''}, {squareColor:'grey', squarePosition:'h8', defaultPiece:'', piece:''}],
    [{squareColor:'grey',squarePosition:'a7',defaultPiece:'bp',piece:''}, {squareColor:'white', squarePosition:'b7', defaultPiece: 'bp', piece:''}, {squareColor: 'grey', squarePosition: 'c7', defaultPiece:'bp', piece:''}, {squareColor: 'white', squarePosition:'d7', defaultPiece:'bp', piece:''},{squareColor:'grey', squarePosition: 'e7', defaultPiece:'bp',piece:''}, {squareColor:'white', squarePosition:'f7', defaultPiece: 'bp', piece:''},{squareColor:'grey', squarePosition:'g7', defaultPiece:'bp', piece:''}, {squareColor:'white', squarePosition:'h7', defaultPiece:'bp', piece:''}],
    [{squareColor:'white',squarePosition:'a6',defaultPiece:'',piece:''}, {squareColor:'grey', squarePosition:'b6', defaultPiece: '', piece:''}, {squareColor: 'white', squarePosition: 'c6', defaultPiece:'', piece:''}, {squareColor: 'grey', squarePosition:'d6', defaultPiece:'', piece:''},{squareColor:'white', squarePosition: 'e6', defaultPiece:'',piece:''}, {squareColor:'grey', squarePosition:'f6', defaultPiece: '', piece:''},{squareColor:'white', squarePosition:'g6', defaultPiece:'', piece:''}, {squareColor:'grey', squarePosition:'h6', defaultPiece:'', piece:''}],
    [{squareColor:'grey',squarePosition:'a5',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'b5',defaultPiece:'',piece:''}, {squareColor:'grey',squarePosition:'c5',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'d5',defaultPiece:'',piece:''},{squareColor:'grey',squarePosition:'e5',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'f5',defaultPiece:'',piece:''},{squareColor:'grey',squarePosition:'g5',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'h5',defaultPiece:'',piece:''}],
    [{squareColor:'white',squarePosition:'a4',defaultPiece:'',piece:''}, {squareColor:'grey',squarePosition:'b4',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'c4',defaultPiece:'',piece:''}, {squareColor:'grey',squarePosition:'d4',defaultPiece:'',piece:''},{squareColor:'white',squarePosition:'e4',defaultPiece:'',piece:''}, {squareColor:'grey',squarePosition:'f4',defaultPiece:'',piece:''},{squareColor:'white',squarePosition:'g4',defaultPiece:'',piece:''}, {squareColor:'grey',squarePosition:'h4',defaultPiece:'',piece:''}],
    [{squareColor:'grey',squarePosition:'a3',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'b3',defaultPiece:'',piece:''}, {squareColor:'grey',squarePosition:'c3',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'d3',defaultPiece:'',piece:''},{squareColor:'grey',squarePosition:'e3',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'f3',defaultPiece:'',piece:''},{squareColor:'grey',squarePosition:'g3',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'h3',defaultPiece:'',piece:''}],
    [{squareColor:'white',squarePosition:'a2',defaultPiece:'wp',piece:'wp'}, {squareColor:'grey',squarePosition:'b2',defaultPiece:'wp',piece:'wp'}, {squareColor:'white',squarePosition:'c2',defaultPiece:'wp',piece:'wp'}, {squareColor:'grey',squarePosition:'d2',defaultPiece:'wp',piece:'wp'},{squareColor:'white',squarePosition:'e2',defaultPiece:'wp',piece:'wp'}, {squareColor:'grey',squarePosition:'f2',defaultPiece:'wp',piece:'wp'},{squareColor:'white',squarePosition:'g2',defaultPiece:'wp',piece:'wp'}, {squareColor:'grey',squarePosition:'h2',defaultPiece:'wp',piece:'wp'}],
    [{squareColor:'grey',squarePosition:'a1',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'b1',defaultPiece:'',piece:''}, {squareColor:'grey',squarePosition:'c1',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'d1',defaultPiece:'',piece:''},{squareColor:'grey',squarePosition:'e1',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'f1',defaultPiece:'',piece:''},{squareColor:'grey',squarePosition:'g1',defaultPiece:'',piece:''}, {squareColor:'white',squarePosition:'h1',defaultPiece:'',piece:''}],
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
