
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from the server!');
  console.log('Kaushal Chaudhary');
});

server.listen(4000, () => {
  console.log('Server is listening on port 4000');
});
