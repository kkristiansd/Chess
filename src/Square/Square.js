import React, { Component } from 'react';
import Piece from '../Piece/Piece';
class Square extends Component {
    constructor(props,Piece) {
        super(props);
        this.state = {
            position:'a2',
            color:'white',
            piece:Piece,
        }
        this.handleEvent = this.handleEvent.bind(this);
    }
    handleEvent() {
        console.log(this.state);
    }
    render() {
        return (
         <div style={{backgroundColor:this.props.youmama,width:80,height:80}}>
         </div>
        );
    }
}
export default Square;  