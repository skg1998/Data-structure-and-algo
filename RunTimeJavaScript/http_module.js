const http = require('http');
const server = http.createServer((req, res) => {
    res.write('hello from server');
    res.end();
})

server.listen(5000)