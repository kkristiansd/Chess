import React from 'react'
import wPawn from '../../assets/whitePawn.png'
import bPawn from '../../assets/blackPawn.png'
import '../Piece.css'
function Pawn(props) {
   console.log("hehee"+props.boardClass)
    if(props.piece==="wp"){
        console.log("white pawns "+props.square.squarePosition)
        return (
            <>
                        
            <img src={wPawn} alt="white pawn" className={props.boardFlip} width={50} height={50} style={{marginLeft:14,marginTop:7}} />
            </>
          ) 
    }else{
        return (
            <>
                        
            <img src={bPawn} alt="black pawn"  className={props.boardFlip} width={50} height={50} style={{marginLeft:14,marginTop:7}} />
            </>
          )
    }
 
}

export default Pawn