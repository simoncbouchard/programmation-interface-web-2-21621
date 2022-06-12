const http = require('http');
const fs = require('fs');


const hostname  = '127.0.0.1';
const port = process.env.PORT || 3000;          // Utilise le port 3000, sauf s'il existe un port préconfiguré

const file = 'index.html';


const server = http.createServer((request, response) => {
    fs.stat(file, function (error, stats) {     // return information about the given file or directory 
        if (error) return;
        if (stats.isFile()) {
            fs.readFile(file, (error, html) => {
                if (error) {
                    throw error;
                }
                if (response.statusCode == 200) {
                    response.setHeader('Content-type', 'text/html');
                    response.write(html);
                    response.end();
                }
            });
        };
    });
}).listen(port);

/*
server.listen(port, hostname, () => {
    console.log('Serveur roule sur le port : ' + port);
});
*/


// Dans le CLI, à la bonne hauteur : node app
// Sur le navigateur : http://localhost:3000/
//                ou : 127.0.0.1:3000