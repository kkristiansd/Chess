import React from 'react'
import wRook from '../../assets/whiteRook.png'
import bRook from '../../assets/blackRook.png'
function Rook(props) {

    if(props.piece==="wr"){
        return (
            <>
                        
            <img src={wRook} alt="white Rook" width={65} height={65} style={{marginLeft:5,marginTop:4}} />
            </>
          ) 
    }else{
        return (
            <>
                        
            <img src={bRook} alt="black Rook" width={65} height={65} style={{marginLeft:5,marginTop:4}} />
            </>
          )
    }
 
}

export default Rook