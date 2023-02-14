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
        return (
            <>
            <img src={require('../assets/pawn.png')} alt="pawn" />;
            </>
        );
    }
}
export default Piece;  