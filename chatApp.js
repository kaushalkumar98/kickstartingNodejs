const http = require('http');
const fs = require('fs');

// Create the message.txt file if it doesn't exist
if (!fs.existsSync('message.txt')) {
  fs.writeFileSync('message.txt', '', 'utf8');
}

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body>');

    // Read the latest message from file and display above the form
    const messages = fs.readFileSync('message.txt', 'utf8').split('\n');
    const latestMessage = messages[messages.length - 2]; // The last element is an empty line
    if (latestMessage) {
      res.write(`<p>${latestMessage}</p>`);
    }

    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.appendFileSync('message.txt', message + '\n');
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});