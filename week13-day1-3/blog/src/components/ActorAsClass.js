import React from "react";

class ActorAsClass extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "Bobby",
            lastName: "Bobbikoff",
            image: '../img/testImage.img'
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            firstName: e.target.firstName.value,
            lastName: e.target.firstName.value,
            image: e.target.firstName.value
        })

         /*if onInput =>*/  
          //this.setState({
        //     [e.target.name]:e.target.value
        // })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="firstName" />
                    <input name="lastName" />
                    <input name="image" />
                    <input type="submit" />
                </form>
                <ul>
                    <li>{this.state.firstName}</li>
                    <li>{this.state.lastName}</li>
                    <li><img src={this.state.image} width={100} /></li>
                </ul>
            </div>
        )
    }
}

export default ActorAsClass;