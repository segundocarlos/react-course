

//para probar estos codigo, se debe de pasar este archivo a la carpeta /src y renombrar este archivo a index.js

//ejemplo de Objeto literal
const persona = {

}
console.log(persona);


///
const persona2 = {
    nombre: 'Tony',
    apellido: 'Stark',
}
console.log(persona2);

//para que se vea mejor 
console.table(persona2);

/// otro ejemplo
const persona3 = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad:'Pedro Carbo',
        zip: 593,
        lat: 56988,
        lng: 34.666
    }
}
console.table(persona3);

// otro ejemplo clonando el objeto COPIANDO LA REFERENCIA
// NO SE USA ESTA ASIGNACION EN REACT
const persona4 = persona3 //EN AMBAS VIAS SE MODIFICA
console.table(persona4); 

//Clonar de una mejor forma sin referencias 
const persona5 = {...persona3 }; //OPERADOR SPREAD
