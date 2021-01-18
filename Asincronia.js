const getTodos = (url, callback) => {
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

  request.open('GET', url);

  reques.send();
};

getTodos('someUrl', (err, data) => {
  console.log(data);
  getTodos('someUrl2', (err, data) => {
    console.log(data);
  });
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
//Promise example 2
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

getTodosP('Url')
  .then((data) => {
    console.log('1:', data);
    return getTodosP('Url');
  })
  .then((data) => {
    console.log('2:', data);
  })
  .catch((err) => {
    console.log(err);
  });
