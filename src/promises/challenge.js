/**
 * the same as in callback/challenge but here we are using promises
 *
 * in this case we have avoided the callback hell 🎉
 */
const fetchData = require('./../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
  .then((data) => {
    console.log(data.info.count);
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then((data) => {
    console.log(data.name);
    return fetchData(data.origin.url);
  })
  .then((data) => {
    console.log(data.dimension);
  })
  .catch((err) => {
    console.log(err);
  });
