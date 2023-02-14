import logo from './logo.svg';
import './App.css';

function Board() {

  const board = [
  
    ["white", "black", "white", "black","white", "black","white", "black"],
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
            return <div style={{backgroundColor:square,width:80,height:80}}>
              <img src={require('./assets/pawn.png')} height={50} width={50} style={{  display: 'block',marginLeft: 'auto',marginRight: 'auto',marginTop:7}}/>
            </div>;
          })}
        </div>
      );
    })}
    
    </>
    
  );
 
}

export default Board;
