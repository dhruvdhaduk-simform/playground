const http = require('http');
const fs = require('fs');
const mustache = require('mustache');
 
const PORT = 8000;
 
http.createServer((req, res) => {
    const html = fs.readFileSync('index.html', 'utf8');
    const data = JSON.parse(fs.readFileSync('db.json', 'utf8'));
    data?.comments?.reverse();
    const output = mustache.render(html, data);
 
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(output);
}).listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));