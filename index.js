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

// Mas ejercicios con map, reduce, filter and sort

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//For each
const all = companies.forEach((company) => {
  console.log(company);
});

//Filter
const canDrive = ages.filter((age) => age > 18);
console.log(canDrive);

const retailCompanies = companies.filter(
  ({ category }) => category === 'Retail'
);
console.log(retailCompanies);

//Map
const companyNames = companies.map(({ name }) => name);
console.log(companyNames);

//sort

const sortedCompanies = companies.sort(
  (start, startTwo) => (start.start > startTwo.start ? -1 : 1) // decendente
);
console.log(sortedCompanies);

const sortedAges = ages.sort((a, b) => (a > b ? -1 : 1));
console.log(sortedAges);

//Reduce

const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);
