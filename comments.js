// Create web server
// Create a web server that listens for requests on port 3000. When a request is received, it reads the comments from the file comments.json and sends it back as the response. If the file does not exist, it should send an empty array as the response.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('comments.json', (err, data) => {
        if (err) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end('[]');
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});