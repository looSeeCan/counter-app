import React, { Component } from 'react'; /// imrc = import statement. This Componet class that we imported has a bunch of methods that we are going to inerit in the 
/// counter class below.

document.title = "Counter";
/// keyboard shortcut "cc" to creater class
class Counter extends Component {
    state = { /// add a property called state. state is a special property in React component. its basically an object that includes any data that this component needs.
        value: this.props.value, /// I had to change this from 0, instead of ihitializing this to 0, we give it the props value so it can be rendered with the same value that is being assigned to it on the counters.jsx
        /// also I changed "value" was originally named "count"
        // imageUrl: "Https://picsum.photos/200",
        // imageUrl: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/308053926_5403345529781102_4848854497029499904_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=be9t5WEhZQAAX8X8-81&tn=BVHjSxUsbjfysZKz&_nc_ht=scontent-ord5-1.xx&oh=00_AT_A-wen1jSfH3ENZqzWM04IGVERID_eYNoPtI3TViQ1kg&oe=63340388"
        // tags: ["tag1", "tag2", "tag3",],
        tags: [],
        
    };
        
    // styles = { embeded css style={this.styles}
    //     fontSize: 50,
    //     fontWeight: "bold"
    // };
    
    
    formatCount() {
        const {value} = this.state /// used object destructuring to improve the commented out return statement
        // console.log(value);
        return value === 0 ? 'Zero': value;
        // return this.state.value === 0 ? "Zero": this.state.value;
    }

    // constructor() {
        //     super();
        //     // console.log(this.handleIncrement.bind(this));
        //     this.handleIncrement = this.handleIncrement.bind(this);
        // }

    // handleIncrement() {/// binding event handlers
    //     console.log("Increment clicked:", this);/// this is undefined here, if you do not have the constructor.
    //     console.log(this.state.value)
    // }

    handleIncrement = product => { ///instead of doing the whole binding thing. use => functions. they dont rebind the this keyword, they inherit it
        console.log("Increment clicked:", this);/// this is undefined here, if you do not have the constructor.
        console.log(product);
        /// Updating the state
        // this.state.value ++ /// we do not modify the state directily. we will not see the changes. it does increment, but react is not aware of that and that is why
        //it is not updating the view. We need to use the setState method that is inherited to tell react explicitly what has changed
        
        this.setState({value: this.state.value +1}) /// we pass an object as an argument to the setState method. we can add a new key and value or update an existing key value
    }
    
    getBadgeClasses() {/// refactored. ctrl+shift+r. extract to method in class counter
    let classes = "badge m-2 badge-"; /// Rendering classes dynamically. the value here is a bootstrap value. the m-2 means margin 2 */
    classes += this.state.value === 0 ? "warning" : "primary"; /// reasigning classes. if the value of value is 0 then the word warning is added to the classes variable
    // (this.state.value === 0) ? classes += "warning": classes += "primary" ///same as ^
        return classes;
    }

    renderTags() { /// conditional rendering
        /// (this.state.tags.length === 0) ? <p>There are no tags!</p> : <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        /// rendering list of items in react. whenever we rendeer a map method, we need to set a key attribute and set the value to a dynamic value {}. the value needs to be unique.
        if(this.state.tags.length === 0)  return <p>There are no tags!</p>
        else return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    };
    
    render() {
        /// launch.json /// spent a whole day trying to set up debugger for react. check git commit. only commenting here, because this is where i 
        /// set my breakpoint and git does not recognize the changes in the luanch.json file.
        
        console.log("this.props:", this.props) /// checking props. these props are being passed in from the render() method in counters.jsx
        let classes = this.getBadgeClasses(); /// refactored
        

        return ( /// React.Fragment. Get's rid of unecessary divs in html.
            <div>

                {/* // <React.Fragment> inside here we can add any valid JavaScript expression or here I am using it for a comment */}
                    {/* <img src={this.state.imageUrl} /> */}
                    {/* passing in the children prop */}
                    {/* {this.props.children}*/}
                    <span className={classes}>{this.formatCount()}</span> {}
                    
                    {/*passing event arguments */} {/*whenever you need to pass an argument to your even hanlers, we simply pass an arrow function here in the onClick */}
                    <button onClick = {() => this.handleIncrement({id: 1})} className='btn btn-secondary btn-sm'>Increment</button> {/*style ={{fontSize: 30}} = inline */}
                    
                    {/* {this.state.tags.length === 0  && "Please create a new tag!"}{/*truthy falsy. if the first statement is true */}
                        {/* the && operator  asks if the next is true. in this case it is, because a string is true. prints the string to the screen */} 
                    {/* {this.state.tags.length === 0 ? "Please create a new tag!" : "false"} */}
                    {/* {this.renderTags()} */}
                {/* </React.Fragment>     */}
            </div>
        );
    }

    
};





export default Counter;