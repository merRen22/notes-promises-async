/**
 * This is a collection of functions made to explain how promises work in JS
 */

// A simple promise that is run when the file is loaded
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      console.log('Hey dude!');
      resolve('Hey!');
    } else {
      reject('Whoops!');
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

// here the promise its not call until it is not invoke
const somethingWillHappen2 = () =>
  new Promise((resolve, reject) =>
    true ? setTimeout(() => resolve('True'), 5000) : reject(error)
  );

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

// here we can call many promises concatenaded
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
