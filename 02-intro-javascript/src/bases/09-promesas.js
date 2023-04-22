import { getHeroeById } from "./bases/imp-exp";



//para probar estos codigo, se debe de pasar este archivo a la carpeta /src y renombrar este archivo a index.js

// const promesa = new Promise ( (resolve, reject ) => {
    
//     setTimeout(() => {
//        const heroe = getHeroeById(3);
//        //resolve(heroe);
//        //reject ('No se pudo encontrar el héroe')
//     }, 2000 );

// });


// promesa.then((x) =>{
//     console.log('heroe', x);
// })
// .catch (err => console.warn(err));


const getHeroeByIdAsync = (id) =>{

    return new Promise ( (resolve, reject ) => {
    
        setTimeout(() => {
           const p = getHeroeById(id);
           if (p) {
             resolve(p); 
           } else{
             reject ('No se pudo encontrar el héroe') 
           }
           
        }, 2000 );
    
    });
}


getHeroeByIdAsync(5)
    .then(x => console.log('Heroe', x))
    .catch(err => console.log(err))
