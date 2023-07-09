/**
 * @param {number} n
 * @return {Function} counter
 */
let createCounter = function (n) {
  let count = n;
  return function () {
    let result = count;
    count += 1;
    return result;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

let counter = createCounter(10)
console.log(counter());
