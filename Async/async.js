//Fetch api how to works

// const info = fetch('./todos/a.json')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     return data;
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Async and Await
const getTodos = async () => {
  const response = await fetch('./todos/a.json');
  const data = await response.json();
  return data;
};

getTodos().then((data) => console.log(data));
