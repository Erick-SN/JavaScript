// -- Repaso General de JS  -- //

//--Destructuracion

let numeros = [1, 2, 3];
const [uno, dos, tres] = numeros;

let persona = {
  nombre: 'Erick',
  apellido: 'Sanchez',
  edad: 22,
};

let { nombre } = persona;
console.log(nombre);
