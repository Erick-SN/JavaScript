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

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((item, index, arr) => console.log(item));

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

//Slice
const numberSlice = [1, 2, 3, 4, 5];
console.log(
  `${numberSlice},
    ${numberSlice.slice(1, 4)}`
);

//Splice
const numberSplice = [1, 2, 3, 4, 5];
console.log(`${numberSplice}-
${numberSplice.splice(2, 3)}`);

//Concat
const a = [1, 2, 3];
const b = [4, 5, 6];
console.log(a.concat(b));
