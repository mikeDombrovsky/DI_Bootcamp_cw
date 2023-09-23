const http = require('http');

const server = http.createServer((request, response) => {
    console.log('url =>', request.url);
    console.log('method =>', request.method);
    const url = request.url;
    if (url === '/' && request.method === 'GET'){
         response.end('<h1> home page</h1>');
    }else if(url === '/about'){
        response.end('<h1>Hello from about page</h1>');
    }else{
        response.end('<h1>404 not found</h1>');
    }
   
});

server.listen(5000);