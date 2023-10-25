import React from 'react';
import '../components/Car.css'

class Car extends React.Component {
    constructor(props){
        // super(props); was neccesary before
        super()
        this.state = {color: "red"};
    }
    
    render(){
        return (
            <div>
                <h1 className='car'>Car component, named{this.props.carName}, likes {this.state.color} color!</h1>
            </div>
        )
    }
}

export default Car;