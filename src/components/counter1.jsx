import React, { Component } from 'react';

class Counter1 extends Component {
    state = {
        count: 0
    };

    style = {
        color: "red",
        // fontSize: 50,
        fontFamily: "cursive" ,
        
    }

    handleClick() {
        console.log('Hello World');
    }

    renderButtons() {
        console.log("renderButtonsss")
        
    }
    
    render() {
        return(
            <div>
                {this.renderButtons()}
                <button onClick={() => {}} style={this.style} >Increment</button>
                <button onClick={() => this.handleClick()} style={{color: "red", fontFamily: 'cursive'}}>Increment</button>
            </div>
        );
    };
};

export default Counter1;