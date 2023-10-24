import React from 'react';

class Car extends React.Component {
    render(){
        return (
            <div>
                <h1>Car component, named{this.props.carName}</h1>
            </div>
        )
    }
}

export default Car;