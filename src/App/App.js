
import './App.css';
import Board from '../Board/Board';

function App() {

  return (
    <div className='bg-slate-400  ' style = {{height:"100%"}}>
      <div className='py-14'>
        <p className='text-center font-sans text-2xl '>Figgity chess</p>
      </div>
      <div className='drop-shadow-2xl border-5 py-4 ' >
        <Board></Board>
     
      </div>
    </div>
    
  );
 
}

export default App;
