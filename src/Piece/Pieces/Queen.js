import React from 'react'
import wQueen from '../../assets/whiteQueen.png'
import bQueen from '../../assets/blackQueen.png'
import '../Piece.css'
function King(props) {

    if(props.piece==="wq"){
        return (
            <>
                        
            <img src={wQueen} alt="white Queen" className={props.boardFlip} width={70} height={70} style={{marginLeft:5,marginTop:6}} />
            </>
          ) 
    }else{
        return (
            <>
                        
            <img src={bQueen} alt="black Queen" className={props.boardFlip} width={70} height={70} style={{marginLeft:5,marginTop:4}} />
            </>
          )
    }
 
}

export default King