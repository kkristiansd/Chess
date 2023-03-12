import React from 'react'
import wKing from '../../assets/whiteKing.png'
import bKing from '../../assets/blackKing.png'
import '../Piece.css'
function King(props) {

    if(props.piece==="wk"){
        return (
            <>
                        
            <img src={wKing} alt="white King" width={70} className={props.boardFlip} height={70} style={{marginLeft:5,marginTop:4}} />
            </>
          ) 
    }else{
        return (
            <>
                        
            <img src={bKing} alt="black King" width={70} className={props.boardFlip} height={70} style={{marginLeft:5,marginTop:4}} />
            </>
          )
    }
 
}

export default King