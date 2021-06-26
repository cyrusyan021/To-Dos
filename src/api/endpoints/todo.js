import todoApiInstance from 'api/configurations/todo';

const getAllTodosApi = () => {
  return new Promise((resolve, reject) => {
    todoApiInstance({ method: 'get' })
      .then(result => {
        resolve(result.data);
      })
      .catch(err => {
        reject(err);
      })
  });
}

export {
  getAllTodosApi,
}