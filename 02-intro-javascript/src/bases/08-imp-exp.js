
//para probar estos codigo, se debe de pasar este archivo a la carpeta /src y renombrar este archivo a index.js

//import  {heroes}  from "./bases/data/heroes"; // esta importacion siempre y cuando no sea la por defecto
import  heroes,{owner}  from "../data/heroes"; // esta importacion siempre y cuando Sea la por defecto


console.log(heroes);
console.log(owner);



//el find funciona con una funcion callback
//FIND
const getHeroeById = (id) =>{
    return heroes.find(( x ) => {
         if (x.id === id) {
            return true;
         } else {
            return false;
         }
    } );
}

console.log(getHeroeById(2));

//el mismo codigo de arriba pero mejorado
//FIND
const getHeroeById2 = (id) => heroes.find(( x ) =>  x.id === id );
console.log(getHeroeById2(2))


// FILTER
const getHeroe = (owner) => heroes.filter(( x ) =>  x.owner === owner );
console.log(getHeroe('DC'));
