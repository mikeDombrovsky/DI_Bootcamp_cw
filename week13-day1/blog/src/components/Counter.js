import React from "react";

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }
    
    inc = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <h1>Counter app</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.inc}>Increment</button>
            </div>

        )
    }
}

export default Counter;