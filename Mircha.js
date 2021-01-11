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
    this.raza = null;
  }
  sonar() {
    console.log('Wau wau');
  }

  //--Metodos estaticos, getters y setters

  static queEres() {
    //--Metodos estaticos
    console.log('Soy un perrito wau wau');
  }
  get getRaza() {
    return this.raza;
  }
  set setRaza(raza) {
    this.raza = raza;
  }
}

const Canela = new Perro('Canela', 'Hembra', 'Chica');
Perro.queEres(); // Podemos utilizar este metodo sin creear un objeto de la clase
Canela.saludar();
Canela.sonar();
Canela.setRaza = 'Mestiza'; // Set, JS lo convierte en una propiedad, podemos asignarle el valor con un igual
Canela.getRaza; // Get, JS lo convierte en una propiedad, esto se ejecutara sin parentesis
