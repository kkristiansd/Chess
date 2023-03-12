import React from 'react'
import wNight from '../../assets/whiteNight.png'
import bNight from '../../assets/blackNight.png'
import '../Piece.css'
function Night(props) {

   
    if(props.piece==="wn"){
        return (
            <>
                        
            <img src={wNight} alt="white Night" className={props.boardFlip} width={70} height={70} style={{marginLeft:5,marginTop:4}} />
            </>
          ) 
    }else{
        return (
            <>
                        
            <img src={bNight} alt="black Night" className={props.boardFlip} width={70} height={70} style={{marginLeft:5,marginTop:4}} />
            </>
          )
    }
 
}

export default Night