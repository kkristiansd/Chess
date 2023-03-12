import React from 'react'
import wBishop from '../../assets/whiteBishop.png'
import bBishop from '../../assets/blackBishop.png'
import '../Piece.css'
function Bishop(props) {

    if(props.piece==="wb"){
        return (
            <>
                        
            <img src={wBishop} alt="white Bishop" className={props.boardFlip} width={70} height={70} style={{marginLeft:5,marginTop:4}} />
            </>
          ) 
    }else{
        return (
            <>
                        
            <img src={bBishop} alt="black Bishop" className={props.boardFlip} width={70} height={70} style={{marginLeft:5,marginTop:4}} />
            </>
          )
    }
 
}

export default Bishop