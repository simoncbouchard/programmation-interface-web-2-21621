// http fait parti du core de Node, il ne requière pas de node_modules 
const http = require('http');


const hostname  = '127.0.0.1';
const port = process.env.PORT || 3000;          // Utilise le port 3000, sauf s'il existe un port préconfiguré


const server = http.createServer((request, response) => {
    if (response.statusCode == 200) {
        response.setHeader('Content-type', 'text/plain');
        response.end('Hello World!');
    }
});

server.listen(port, hostname, () => {
    console.log('Serveur roule sur le port : ' + port);
});


// Dans le CLI, à la bonne hauteur : node app
// Sur le navigateur : http://localhost:3000/
//                ou : 127.0.0.1:3000