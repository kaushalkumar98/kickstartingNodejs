// When url = /home , return response ==> Welcome home
// When url = /about, return response ==> Welcome to About Us page
// When url =/node, return response ==> Welcome to my Node Js project

const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><h1>Welcome to my NodeJs Project</h1></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/home') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><h1>Welcome home</h1></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/about') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><h1>Welcome to About Us page</h1></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/node') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    res.write('</html>');
    return res.end();
  }
});

server.listen(4000, () => {
  console.log('Server is listening on port 4000');
});