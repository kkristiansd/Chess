import React, { Component } from 'react';  
  
class Piece extends Component {  
  constructor(props){  
    super(props);  
    this.state = { 
        key:'1', 
         piece: 'p',
         color:'white',
         defaultPosition:'b2',

      }  
    this.handleEvent = this.handleEvent.bind(this);  
  }  
  handleEvent(){  
    console.log(this.props.state);  
  }  
  render() {  
    return (  
      <div className="App">  
    <h2>React Constructor Example</h2>  
    <input type ="text" value={this.state.data} />  
        <button onClick={this.handleEvent}>Please Click</button>  
      </div>  
    );  
  }  
}  
export default Piece;  