const getTodos = (URL) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest(); // Request Object
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('Error getting request');
      }
    });
    request.open('GET', URL);
    request.send();
  });
};

getTodos('./todos/a.json')
  .then((data) => {
    console.log('A:', data);
    return getTodos('./todos/b.json');
  })
  .then((data) => {
    console.log('B:', data);
    return getTodos('./todos/c.json');
  })
  .then((data) => console.log('C:', data))
  .catch((err) => console.error(err));
