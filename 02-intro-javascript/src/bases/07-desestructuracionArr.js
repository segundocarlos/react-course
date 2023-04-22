

//para probar estos codigo, se debe de pasar este archivo a la carpeta /src y renombrar este archivo a index.js

//retorna el 3 elemento 
const personajes = ['Goku','Vegeta','Trunks'];
const [,,personaje] = personajes;
console.log(personaje);


const retornaArreglo = () => {
    return ['ABC',123];
}

//otro ejemplo pero con funciones 
const [letras,numeros] = retornaArreglo();
console.log(letras);
console.log(numeros);

//retorna la ejecucion de una funcion
const retornaArreglo2 = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre,setNombre] = retornaArreglo2('Goku');
console.log(nombre);
setNombre();
