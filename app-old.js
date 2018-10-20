const http = require(' http ');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-type': 'application/json' });

    let salida = {
        nombre: 'Jose Luis',
        edad: 62,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    //res.write('Hola mundo');
    res.end();
})

.listen(3000);

console.log('Escuchando el puerto 3000');