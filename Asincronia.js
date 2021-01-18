const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  reques.addEventListener('readystatechange', () => {
    //console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
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
