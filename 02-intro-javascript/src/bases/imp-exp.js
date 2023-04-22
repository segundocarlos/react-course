

//import  {heroes}  from "./bases/data/heroes"; // esta importacion siempre y cuando no sea la por defecto
import  heroes  from "./data/heroes"; // esta importacion siempre y cuando Sea la por defecto


//el mismo codigo de arriba pero mejorado
//FIND
export const getHeroeById = (id) => heroes.find(( x ) =>  x.id === id );


// FILTER
export const getHeroe = (owner) => heroes.filter(( x ) =>  x.owner === owner );

