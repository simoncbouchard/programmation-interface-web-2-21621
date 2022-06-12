const http = require('http');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql');


let connexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',                           // MAC
    //password: '',                             // Windows
    database: 'ligue-async',
    port: '8889'                                // Fix MAMP (ref : https://stackoverflow.com/questions/30266221/node-js-mysql-error-connect-econnrefused/37563064)
});


connexion.connect((error) => {
    if (error) throw error;
    connexion.query('SELECT * FROM equipes', (error, results) => {
        if (error) throw error;
        console.log(results);


        http.createServer((request, response) => {
            console.log('request ', request.url);
        
            let filePath = '.' + request.url;
            if (filePath == './') {
                filePath = './index.html';
            }
        
            let extName = String(path.extname(filePath)).toLowerCase();
            let mimeTypes = {
                '.html': 'text/html',
                '.js': 'text/javascript',
                '.css': 'text/css',
                '.json': 'application/json',
                '.png': 'image/png',
                '.jpg': 'image/jpg',
                '.gif': 'image/gif',
                '.svg': 'image/svg+xml',
                '.wav': 'audio/wav',
                '.mp4': 'video/mp4',
                '.woff': 'application/font-woff',
                '.ttf': 'application/font-ttf',
                '.eot': 'application/vnd.ms-fontobject',
                '.otf': 'application/font-otf',
                '.wasm': 'application/wasm'
            };
        
            let contentType = mimeTypes[extName] || 'application/octet-stream';


            fs.readFile(filePath, (error, content) => {
                if (error) {
                    if(error.code == 'ENOENT') {
                        fs.readFile('./404.html', (error, content) => {
                            response.writeHead(404, { 'Content-Type': 'text/html' });
                            response.end(content, 'utf-8');
                        });
                    } else {
                        response.writeHead(500);
                        response.end('Erreur 500 : ' + error.code + ' ..\n');
                    }
                } else {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.write(content, 'utf-8');

                    if (filePath == './index.html') {
                        let teams = showTeams();
                        response.write(teams);
                    }

                    response.end();
                }
            });

        
        }).listen(3000);


        /**
         * Retourne le DOM des équipes de la db 'ligue-async'
         */
        showTeams = () => {
            let domTeams = `<h3>Les équipes de la ligue de garage ASYNC sont :</h3>
                            <ul>
                            `;

            for (let row in results) {
                domTeams += `<li>${results[row].nom} de ${results[row].quartier}</li>`;
            };

            domTeams += `</ul>`;

            return domTeams;
        }
    });
});