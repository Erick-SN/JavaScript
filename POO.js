class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }
  saludar(saludo) {
    console.log(`Hola, me llamo ${this.nombre}`);
    if (saludo) saludo(this.nombre, false);
  }
  soyAlto() {
    return this.altura > 1.8;
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura, nickname) {
    super(nombre, apellido, altura);
    this.nickname = nickname;
  }
  saludar(saludo) {
    console.log(`Hola!, Soy ${this.nombre} y mi nickname es ${this.nickname}`);
    if (saludo) saludo(this.nombre, true);
  }
}

const saludo = (nombre, esDev) => {
  console.log(`Buen dia ${nombre}`);
  if (esDev) console.log('No sabia que eras Dev');
};

let ERICK = new Persona('Erick', 'Sanchez', 1.84);
let LUIS = new Desarrollador('Luis', 'Flores', 1.84, 'Batau');
ERICK.saludar(saludo);
LUIS.saludar(saludo);
console.log(LUIS.soyAlto());
