import React, { Component } from 'react';
import Pawn from './Pieces/Pawn';
import King from './Pieces/King';
import Queen from './Pieces/Queen';
import Rook from './Pieces/Rook';
import Bishop from './Pieces/Bishop';
import Night from './Pieces/Night';
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
                
              <Pawn square={this.props.square} piece={this.props.piece} />
                </>
            );
        }
        if(this.props.piece ==='bp'){
            return (
                <>
                
                <Pawn square={this.props.square} piece={this.props.piece} />
                </>
            );
        }
        if(this.props.piece ==='wk'){
            return (
                <>
                
                <King piece={this.props.piece} />
                </>
            );
        }
        if(this.props.piece ==='bk'){
            return (
                <>
                
                <King piece={this.props.piece} />
                </>
            );
        }
        if(this.props.piece ==='wq'){
            return (
                <>
                
                <Queen piece={this.props.piece} />
                </>
            );
        }
        if(this.props.piece ==='bq'){
            return (
                <>
                
                <Queen piece={this.props.piece} />
                </>
            );
        }
        if(this.props.piece ==='wn'){
            return (
                <>
                
                <Night piece={this.props.piece} />
                </>
            );
        }
        if(this.props.piece ==='bn'){
            return (
                <>
                
                <Night piece={this.props.piece} />
                </>
            );
        }
        if(this.props.piece ==='wb'){
            return (
                <>
                
                <Bishop piece={this.props.piece} />
                </>
            );
        }
        if(this.props.piece ==='bb'){
            return (
                <>
                
                <Bishop piece={this.props.piece} />
                </>
            );
        }
        if(this.props.piece ==='wr'){
            return (
                <>
                
                <Rook piece={this.props.piece} />
                </>
            );
        }
        if(this.props.piece ==='br'){
            return (
                <>
                
                <Rook piece={this.props.piece} />
                </>
            );
        }
       
       
    }
}
export default Piece;  