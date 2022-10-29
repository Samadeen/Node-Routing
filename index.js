const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);

  if (pathname === '/' || pathname === '/home.html') {
    //Home Page
    fs.readFile('home.html', (err, data) => {
      res.writeHead(200, {
        'Content-Type': 'text/html',
      });
      res.write(data);
      return res.end();
    });
    //About Page
  } else if (pathname === '/about.html') {
    fs.readFile('about.html', (err, data) => {
      res.writeHead(200, {
        'Content-Type': 'text/html',
      });
      res.write(data);
      return res.end();
    });
    //COntact Page
  } else if (pathname === '/contact.html') {
    fs.readFile('contact.html', (err, data) => {
      res.writeHead(200, {
        'Content-Type': 'text/html',
      });
      res.write(data);
      return res.end();
    });
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'zuri-task',
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});
