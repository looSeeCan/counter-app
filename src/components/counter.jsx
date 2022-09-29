import React, { Component } from 'react'; /// imrc = import statement

/// keyboard shortcut "cc" to creater class
/// testing: committing to the command line with description and message
class Counter extends Component {
    state = { /// add a property called state. state is a special property in React component. its basically an object that includes any data that this component needs.
        count: 0,
        // imageUrl: "Https://picsum.photos/200",
        // imageUrl: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/308053926_5403345529781102_4848854497029499904_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=be9t5WEhZQAAX8X8-81&tn=BVHjSxUsbjfysZKz&_nc_ht=scontent-ord5-1.xx&oh=00_AT_A-wen1jSfH3ENZqzWM04IGVERID_eYNoPtI3TViQ1kg&oe=63340388"
        // tags: ["tag1", "tag2", "tag3",],
        tags: [],

    };

    // styles = { embeded css style={this.styles}
    //     fontSize: 50,
    //     fontWeight: "bold"
    // };
    
    render() {
        let classes = this.getBadgeClasses(); /// refactored

        return ( /// React.Fragment. Get's rid of unecessary divs in html.
        <React.Fragment> {/*inside here we can add any valid JavaScript expression or here I am using it for a comment*/}
            {/* <img src={this.state.imageUrl} /> */}
            <span className={classes}>{this.formatCount()}</span> {}
            <button className='btn btn-secondary btn-sm'>Increment</button> {/*style ={{fontSize: 30}} = inline */}
            
            {this.state.tags.length === 0 && "Please create a new tag!"}
            {this.renderTags()}
        </React.Fragment>    
        );
    }

    renderTags() { /// conditional rendering
        /// (this.state.tags.length === 0) ? <p>There are no tags!</p> : <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        /// rendering list of items in react. whenever we rendeer a map method, we need to set a key attribute and set the value to a dynamic value {}. the value needs to be unique.
        if(this.state.tags.length === 0)  return <p>There are no tags!</p>
        else return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    };

    getBadgeClasses() {/// refactored. ctrl+shift+r. extract to method in class counter
        let classes = "badge m-2 badge-"; /// Rendering classes dynamically. the value here is a bootstrap value. the m-2 means margin 2 */
        classes += this.state.count === 0 ? "warning" : "primary"; /// reasigning classes. if the value of count is 0 then the word warning is added to the classes variable
        return classes;
    }

    formatCount() {
        const {count} = this.state /// used object destructuring to improve the commented out return statement
        // console.log(count);
        return count === 0 ? 'Zero': count;
        // return this.state.count === 0 ? "Zero": this.state.count;
    };
    
};





export default Counter;