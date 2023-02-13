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
    <div className='bg-slate-400  ' style = {{height:"100%"}}>
      <div className='py-14'>
        <p className='text-center font-sans text-2xl'>Figgity chess</p>
      </div>
      <div className='drop-shadow-2xl border-5 py-4 animate-bounce	' >
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
