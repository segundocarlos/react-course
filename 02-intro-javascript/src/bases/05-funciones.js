

//para probar estos codigo, se debe de pasar este archivo a la carpeta /src y renombrar este archivo a index.js

const  saludar =  function (nombre) {
    return `Hola, ${nombre}`;
}

console.log(saludar('Carlos'));

////// funciones de flecha -- lamba
//LA MISMA FUNCION DE ARRIBA TRANSFORMADA A FUNCION DE FLECHA

const  saludar2 =  (nombre) => {
    return `Hola, ${nombre}`;
}

console.log(saludar2('Carlos Figueroa'));

////// funciones de flecha -- lamba
//LA MISMA FUNCION DE ARRIBA TRANSFORMADA A FUNCION DE FLECHA ----MAS SIMPLEFICADA
//SIEMPRE Y CUANDO SOLO REGRESE UN SOLO RETURN

const  saludar3 =  (nombre) =>  `Hola, ${nombre}`;

console.log(saludar3('Carlos Figueroa again'));


////// funciones de flecha -- lamba
//LA MISMA FUNCION DE ARRIBA TRANSFORMADA A FUNCION DE FLECHA ----MAS SIMPLEFICADA
//SIEMPRE Y CUANDO SOLO REGRESE UN SOLO RETURN Y NO RECIBA ARGUMENTOS

const  saludar4 =  () =>  `simplemente Hola`;

console.log(saludar4());


// para retornar un objeto
const getUser = () =>({
        uid : 'ABC123',
        username: 'el papi',
    })
const user = getUser()

console.log(user);

////// tarea ////
// transformar esta funcion en una funcion de flecha
function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC456',
        username: nombre
    }
}
const userActivo = getUsuarioActivo ('Carlos Segundo');
console.log(userActivo);

////// tarea resuelta////
// transformar esta funcion en una funcion de flecha
const userActivate =  (nombre) =>({
        uid: 'ABC456',
        username: nombre
       }
)
const userActivo2 = userActivate('Carlos S');
console.log(userActivo2);