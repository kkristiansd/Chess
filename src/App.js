import logo from './logo.svg';
import './App.css';

function App() {
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
    <div className='bg-slate-400 h-full border-8 '>
      <div className='drop-shadow-2xl centerBoard' >
        {board.map((row, index) => {
          return (
            <div className="row">
              {row.map((square, sIndex) => {
                return <div style={{backgroundColor:square,width:80,height:80}}></div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
    
  );
 
}

export default App;
