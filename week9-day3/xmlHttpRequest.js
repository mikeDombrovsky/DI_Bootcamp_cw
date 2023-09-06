// XMLHttpRequest
let xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// xhr.open('GET', 'https://zivuch.github.io/emails.xml');
xhr.open('GET', 'https://zivuch.github.io/load?999');

xhr.send();

xhr.onload = ()=> {
    if(xhr.status === 200){
        // console.log(JSON.parse(xhr.response));
        // const users =JSON.parse(xhr.response);
        const users = xhr.response;
        // render(users);
        console.log(users);
        // loadXml(users)
    }else{
        console.log(`${xhr.status} : ${xhr.statusText}`);
    }
}
        
xhr.onerror = () => {
    console.log('request failed');
}

xhr.onprogress = (event) => {
    if (event.lengthComputable) {
        console.log(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
        console.log(`Received ${event.loaded} bytes`); // no Content-Length
    }
};

xhr.timeout = 10000;//default is browser's
// xhr.responseType = "text"
// xhr.responseType = "json"
// xhr.responseType = "document"

const render = (arr) => {
    const html = arr.map(item => {
        return `<div>
        <img src="https://robohash.org/${item.id}?size=150x150">
        <h2>${item.name}</h2>
        <p>${item.username}</p>
        <p>${item.email}</p>
        </div>`;
    })
    const root = document.querySelector('div#root');
    root.innerHTML = html.join();
}


function loadXml(xmlDoc) {
    var cd = xmlDoc.getElementsByTagName("email");
    for (let i = 0; i < cd.length; i++) {
        console.log(cd[i].getElementsByTagName("to")[0].childNodes[0].nodeValue);
        console.log(cd[i].getElementsByTagName("from")[0].childNodes[0].nodeValue);
    }
}




function weather(){
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.open('GET', 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13');
    xhr.setRequestHeader('X-RapidAPI-Key', '535dde9f96msh936b2505d12f23cp1477b3jsn86f2c6bb2838');
    xhr.setRequestHeader('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com');

    xhr.send(data);
}