import React, { Component } from 'react';

class Piece extends Component {
    constructor(props) {
        super(props);
        this.state = {
            piece: 'p',
            color: 'white',
        }
        this.handleEvent = this.handleEvent.bind(this);
    }
    handleEvent() {
        console.log(this.state);
    }
    render() {
        if(this.props.piece ==='wp'){
            return (
                <>
                
                <img src={require('../assets/whitePawn.png')} alt="white pawn" width={50} height={50} style={{marginLeft:14,marginTop:7}} />;
                </>
            );
        }
        if(this.props.piece ==='bp'){
            return (
                <>
                
                <img src={require('../assets/blackPawn.png')} alt="black pawn" width={50} height={50} style={{marginLeft:14,marginTop:7}} />;
                </>
            );
        }
       
       
    }
}
export default Piece;  