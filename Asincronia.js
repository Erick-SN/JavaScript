const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  reques.addEventListener('readystatechange', () => {
    //console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback('could not fetch data from server');
    }
  });

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

  reques.send();
};

getTodos((err, data) => {
  console.log('callback fired');
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// Promise example

const getSomething = () => {
  return new Promise((resolve, reject) => {
    resolve('some date');
    reject('some error');
  });
};

getSomething().then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);

getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

const getTodosP = (url) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    reques.addEventListener('readystatechange', () => {
      //console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('some error occurred');
      }
    });
    request.open('GET', url);
    reques.send();
  });
};

getTodosP('someurl')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
