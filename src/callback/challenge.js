/**
 * here we make a call to an api that gives us a character from rick & morty
 * inside this list we fetch the url from a user and inside that another url
 * to request the specifics from a user
 *
 * this could let to callback hell 🔥
 */
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let api = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', url_api, true);
  xhttp.onreadystatechange = (event) => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error' + url_api);
        callback(error, null);
      }
    }
  };
  xhttp.send();
}

/**
 * here we call the function that makes the request using as params that
 * can ba pass as error and data and a function that is run once the
 * result its retrive.
 */
fetchData(api, (error1, data1) => {
  if (error1) return console.error(error1);
  // then we make the call again but using one param from the previous result
  fetchData(api + data1.results[0].id, (error2, data2) => {
    if (error2) return console.error(error2);
    // and finally a las call to retrive the last data
    fetchData(data2.origin.url, (error3, data3) => {
      if (error3) return console.error(error3);
      // the data we were looking for has arrived :)
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);

      // url we have used
      console.log(api);
      console.log(api + data1.results[0].id);
      console.log(data2.origin.url);
    });
  });
});
