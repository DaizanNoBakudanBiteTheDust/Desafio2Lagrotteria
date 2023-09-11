// dependencia de los NPM
const fs = require('fs');

// Implementacion

fs.writeFileSync('./ejemplo.txt', 'Hola coder estamos trabajando en un archivo');

fs.writeFileSync('./ejemplo.txt', 'Hola coder estamos trabajando en un archivo');

if(fs.existsSync('./ejemplo.txt')) {
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8');
    console.log(contenido);

    fs.appendFileSync('./ejemplo.txt', '\nMás contenido');

    contenido = fs.readFileSync('./ejemplo.txt', 'utf-8');
    console.log(contenido);

    fs.unlinkSync('./ejemplo.txt');
}