/**
 * This is a collection of functions made to explain how async/await work in JS
 */

const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve('Do Something Async');
        }, 3000)
      : reject(new Error('Test Error'));
  });
};

// await can only be called from inside async
const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
};

(async () => {
  console.log('Before');
  await doSomething();
  console.log('After');
})();

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  console.log('Before 1');
  await anotherFunction();
  console.log('After 1');
})();
