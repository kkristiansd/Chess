import React, { Component } from 'react';
import Pawn from './Pieces/Pawn';
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
                
              <Pawn piece={this.props.piece} />
                </>
            );
        }
        if(this.props.piece ==='bp'){
            return (
                <>
                
                <Pawn piece={this.props.piece} />
                </>
            );
        }
       
       
    }
}
export default Piece;  