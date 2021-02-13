const getTodos = (URL, callback) => {
  const request = new XMLHttpRequest(); // Request Object
  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback('could not fetch data', undefined);
    }
  });
  request.open('GET', URL);
  request.send();
};

getTodos('./todos/a.json', (err, data) => {
  if (err) console.log(err);
  else {
    console.log(data);
    getTodos('./todos/b.json', (err, data) => {
      if (err) console.log(err);
      else {
        console.log(data);
        getTodos('./todos/c.json', (err, data) => {
          if (err) console.log(err);
          else console.log(data);
        });
      }
    });
  }
});
