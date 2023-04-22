

const activo =true;

const mensaje =  (activo) ? 'Activo' : 'Inactivo'; 
console.log(mensaje) 

//forma corta de if
const mensaje2 =  (!activo) ? 'Activo' : 'Inactivo';
console.log(mensaje2); 

//forma corta de if
const mensaje3 =  activo && 'Activo';
console.log(mensaje3); 

//forma corta de if
const mensaje4 =  !activo && 'Activo';
console.log(mensaje4); 