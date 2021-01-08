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

//--rest y spread operator

const suma = (a, b, ...c) => {
  // rest
  //
  let resultado = a + b;
  c.forEach((n) => (resultado += n));
  return resultado;
};

console.log(suma(5, 5, 5, 5, 5, 5, 5));

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const arrDos = [9, 10, 11, 12, 13, 14, 15];
const arrTres = [...arr, ...arrDos]; // spread
console.log(arrTres);

//-- Clses de JS

class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  sonar() {
    console.log('Estoy vivo');
  }
  saludar() {
    console.log(`Hola mi nombre es ${this.nombre}`);
  }
}

class Perro extends Animal {
  constructor(nombre, genero, talla) {
    super(nombre, genero);
    this.talla = talla;
  }
  sonar() {
    console.log('Wau wau');
  }
}

const Canela = new Perro('Canela', 'Hembra', 'Chica');
Canela.saludar();
Canela.sonar();
