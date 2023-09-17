const a = fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({
        title: 'My Title',
        body: 'some data',
        userId: 1
    }),
    headers: {
        'Content-type': 'application/json'
    }
});

a.then(res => res.json())
    .then(data => {
        console.log(data);
    })

//put
const b = fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: "PUT",
    body: JSON.stringify({
        title: 'My Title2',
        body: 'some data2',
        userId: 1,
        id: 1,
    }),
    headers: {
        'Content-type': 'application/json'
    }
});

b.then(res => res.json())
    .then(data => {
        console.log(data);
    })


const c = fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: "DELETE",
    });

c.then(res => res.json())
    .then(data => {
        console.log(data);
    })