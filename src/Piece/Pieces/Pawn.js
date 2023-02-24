import React from 'react'
import wPawn from '../../assets/whitePawn.png'
import bPawn from '../../assets/blackPawn.png'
function Pawn(props) {
   
    if(props.piece=="wp"){
        console.log("white pawns "+props.square.squarePosition)
        return (
            <>
                        
            <img src={wPawn} alt="white pawn" width={50} height={50} style={{marginLeft:14,marginTop:7}} />
            </>
          ) 
    }else{
        return (
            <>
                        
            <img src={bPawn} alt="black pawn" width={50} height={50} style={{marginLeft:14,marginTop:7}} />
            </>
          )
    }
 
}

export default Pawn