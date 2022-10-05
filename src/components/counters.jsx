import React, {Component} from "react";
import Counter from "./counter";


class Counters extends Component {

    state = { /// state is data that is local or private to that component.
        counters: [{id: 1, value: 4}, {id: 2, value: 0}, {id: 3, value: 0}, {id: 4, value: 0}],
    };
    render() {
        return(
            <div className="fromCounters"> {/*this is going to be the wrapper or container for all our counters, because we want to return a single element from the render method */}
                    {/* <Counter />
                    <Counter />
                    <Counter />
                    <Counter /> */}
                
                {/*instead of hardcoding the <Counter /> multiple times^, we want to create an array of objects in the state and mapp */}
                {this.state.counters.map(item => {
                    // console.log(<Counter key={item.id}/>)
                    // return <Counter key={item.id}/>/// so this maps the values of the objects in the counters array to <Counter /> and loops four of them
                    /// but if I want to pass props
                    return <Counter key={item.id} value={item.value} />
                })}

                {/*children prop */}
                {/* <Counter key={5} value={0}>
                    <h4>Title</h4>
                </Counter> */}

            </div>
        );
    }
}

export default Counters;