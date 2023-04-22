

//para probar estos codigo, se debe de pasar este archivo a la carpeta /src y renombrar este archivo a index.js

const nombre = 'Carlos';
const apellido = 'Figueroa';

//const nombreCompleto = nombre + ' ' + apellido;

//console.log(nombreCompleto);

const nombreCompleto = `${nombre} ${apellido}`;

//imprime los carateres especiales
const nombreCompleto2 = `
${nombre} 
${apellido}`;


console.log(nombreCompleto);

console.log(nombreCompleto2);


/////////////////

function getSaludo(nombre){
    return 'Hola Mundo ' + nombre
}


console.log(`Este es un texto: ${getSaludo(nombre)}`);
