import React from 'react'
import wQueen from '../../assets/whiteQueen.png'
import bQueen from '../../assets/blackQueen.png'
function King(props) {

    if(props.piece==="wq"){
        return (
            <>
                        
            <img src={wQueen} alt="white Queen" width={70} height={70} style={{marginLeft:5,marginTop:6}} />
            </>
          ) 
    }else{
        return (
            <>
                        
            <img src={bQueen} alt="black Queen" width={70} height={70} style={{marginLeft:5,marginTop:4}} />
            </>
          )
    }
 
}

export default King