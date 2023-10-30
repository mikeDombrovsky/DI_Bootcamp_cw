import { useState, useEffect } from 'react';
const Hi = (props) => {
    const [username, setUsername] = useState('Name');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (users.length == 0) {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(data => setUsers(data));
        }
    }, [users, props, username]);
    //nothing as second parameter - works everytime. Empty dependincies array if you want to behave as didMount or variables in arr to listen to

    return (
        <>
            <h1>hello {username}</h1>
            <input onChange={(e) => setUsername(e.target.value)} />
            <div>
                {
                    users.map(user => <div>{user.name}</div>)
                }
            </div>
        </>
    );
};

export default Hi;