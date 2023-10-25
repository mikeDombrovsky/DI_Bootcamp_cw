import React from "react";

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(resp => resp.json()) //return a promise
            .then(data =>
                this.setState({ users: data }) //add a new attribute to the state
            )
            .catch(function (error) {
                console.log(`We got the error ${error}`)
            });
    }

    render() {
        return (
            <div>
                {this.state.users.map(user => {
                    return (
                        <div>
                            <h2>{user.name}</h2>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Users;