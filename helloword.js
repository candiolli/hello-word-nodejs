const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write("<h1>Hello World</h1>");
	res.write("<br>");
	res.write("<br>");
  	res.end('Primeiro codigo node js\n');
}).listen(port, hostname, () => {
  	console.log(`Server running at http://${hostname}:${port}/`);
});