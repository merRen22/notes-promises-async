/**
 * This is a collection of functions made to explain how callbacks work in JS
 */

function sum(num1, num2) {
  return num1 + num2;
}

// so we have here a function does has another function reference as a param
function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 3, sum));

function date(callback) {
  console.log(new Date());
  setTimeout(function () {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);
