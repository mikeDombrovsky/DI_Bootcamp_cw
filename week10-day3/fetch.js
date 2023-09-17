//https://jsonplaceholder.typicode.com/posts?userId=2

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => data.map(user => {
        const div = document.querySelector('div.authors');

        div.innerHTML =
            `<div id=${user.id}>${user.name} 
            <button onclick="showPosts(event)">posts</button>
            </div>
           `;
        document.body.appendChild(div)
    }))
    .catch(err => console.log(err));

function showPosts(e) {
    let id = e.target.parentNode.getAttribute('id');
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(res => res.json())
        .then(data => data.map(post => {

            const div = document.querySelector(`#${id}`);
            div.innerHTML =
                `<div>${JSON.stringify(post.body)}</div>`;
            document.body.appendChild(div)
        }))
        .catch(err => console.log(err));
}

