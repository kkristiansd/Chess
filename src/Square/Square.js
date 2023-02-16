import React ,{useState }from 'react';
import Piece from '../Piece/Piece';
import ReactDOM from "react-dom";

function Square(props) {
    
    const[color,setColor]= useState(null);
    

    

    const selectInitialSquare = (squareId, color, piece) => {
       
        
        document.getElementById(squareId).style.backgroundColor="red";
       // console.log("here"+localStorage.getItem("squareId"));
        if(localStorage.getItem("squareId")!=null&&localStorage.getItem("squareId")!=squareId){
            const lastSquareId= localStorage.getItem("squareId");
            const btn = document.getElementById(lastSquareId);
            console.log(btn.className);
            btn.style.backgroundColor=btn.className;
        }



        localStorage.setItem("squareId", squareId);

       

    };
    return (
        <div id={props.position} className={props.color}onClick={() => selectInitialSquare(props.position, props.color, props.piece)} style={{ backgroundColor: props.color, width: 80, height: 80 }}>
            <Piece piece={props.defaultPiece}></Piece>
        </div>
    );

}
export default Square;  