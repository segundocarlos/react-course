

//para probar estos codigo, se debe de pasar este archivo a la carpeta /src y renombrar este archivo a index.js

//ARREGLOS en JS


const arreglo = [];
arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);

console.log(arreglo);

let arreglo2 = arreglo;

arreglo2.push(5)

//SE AGREGA EL DATO TBN EN EL ARREGLO ORIGINAL POR QUE SE ESTA COPINADO LA REFERENCIA MAS NO SE ESTA CLONANDO
console.log(arreglo);
console.log(arreglo2);

//PARA CLONARLO CORRECTAMENTE
let arreglo3 = [... arreglo,6];

console.log(arreglo);
console.log(arreglo3);

///METODO MAP --PARA CLONAR SIN REFERENCIAS 
// CALLBACK -- USANDO FUNCIONES
let arreglo4 = arreglo.map(function (numero){
    return numero * 2;
});
console.log(arreglo4);
