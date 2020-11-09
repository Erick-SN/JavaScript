//Creacion de variables
var numero = 1; //Maneja un scope global, ademas es afectada por el hosting
let letNumero = 1; //Tiene un scope de bloque, esta no es afectada por el hosting, es mandada a la temporal
//deadzone cuando js lee por primera vez nuestro codigo
const constNumero = 1; //Igualmente que let, tiene un scope de bloque y es mandada a la temporal deadzone

//Algunos metodos para strings
let Erick = 'Erick Sanchez';
console.log(Erick.length); //regresa la longitud de la cadena
console.log(Erick.toLowerCase()); // Pasa el texto a minusculas
console.log(Erick.toUpperCase()); // Pasa el texto a mayusculas
console.log(Erick.charAt(3)); // Regresa el caracter en la posicion indicada
console.log(`${Erick} Nogueron`); // Esta es interpolacion de texto, se utiliza con ``
console.log(Erick.substr(1, 2)); // Toma de donde a donde quieres sustraer el string

//Desestructuracion de Objetos y arreglos
const persona = {
  nombre: 'Erick',
  edad: '22',
};

const saludo = ({ nombre }) => {
  console.log(`Hola ${nombre}`);
};
saludo(persona);

const numeros = [1, 2, 3];
const [uno, dos, tres] = numeros;
console.log(uno, dos, tres);

//Arreglos
const ERICK = {
  nombre: 'Erick',
  edad: '22',
  talla: 174,
};

const LUIS = {
  nombre: 'Luis Daniel',
  edad: '22',
  talla: 173,
};

const ABRIL = {
  nombre: 'Abril Alejandra',
  edad: '22',
  talla: 165,
};

const personas = [ERICK, LUIS, ABRIL];

//Filtrar
// const esAlta = ({ talla }) => talla > 165;
// const personasAltas = personas.filter(esAlta);
const personasAltas = personas.filter(({ talla }) => talla > 165);
console.log(personasAltas);

//Map o transformacion de un array
const personasMts = personas.map((persona) => ({
  ...persona,
  talla: persona.talla / 100,
}));

console.log(personasMts);

//Reduce
const totalTalla = personas.reduce((total, { talla }) => (total += talla), 0);
console.log(totalTalla);
