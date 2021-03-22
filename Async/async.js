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

const getData = (URL) => {
  return new Promise((resolve, reject) => {
    const data = fetch(URL).then((response) => {
      if (response.status !== 200) reject('Error');
      else response.json().then((data) => resolve(data));
    });
    return data;
  });
};

const getTodos = async () => {
  // const response = await fetch('./todos/a.json');
  // const responseB = await fetch('./todos/b.json');
  // const responseC = await fetch('./todos/c.json');
  // const data = await response.json();
  // const dataB = await responseB.json();
  // const dataC = await responseC.json();
  const response = await Promise.all([
    getData('./todos/a.json'),
    getData('./todos/b.json'),
    getData('./todos/c.json'),
  ]);
  return response;
  // return [data, dataB, dataC];
};

getTodos().then((data) => data.map((blogs) => console.log(blogs)));
