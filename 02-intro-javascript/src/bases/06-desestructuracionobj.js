

//para probar estos codigo, se debe de pasar este archivo a la carpeta /src y renombrar este archivo a index.js

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'iron'
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

/// mejarando la desctructuracion ejemplo 1

const {nombre} = persona;
console.log(nombre);

const {edad,clave} = persona;
console.log(edad);
console.log(clave);

///  desctructuracion en el argumento 
// en la llamada se le pasa todo el objeto
const retornaPersona = ({nombre,edad}) => {
    console.log('el nombre es:' + nombre);
    console.log('la edad es:' + edad);
}
retornaPersona(persona);

//Lo mismo que el anterior pero con un nuevo campo que no estra en el objeto persona
const retornaPersona2 = ({nombre,edad,rango = 'capitan'}) => {
    console.log(`${nombre}  ${edad}  ${rango}`);
}
retornaPersona2(persona);


//destructurando los datos luego de la ejecucion de la funcion 
const retornaPersona3 = ({clave,nombre,edad,rango = 'capitan'}) => {
    return {
        nombreClave: clave,
        anios : edad,
        latlng: {
            lat:12.64788,
            lng: 89788
        }
    }
   
}

const {nombreClave,anios,latlng} = retornaPersona3(persona);
console.log(nombreClave);
console.log(anios);
console.log(latlng);



