let createCounter = function (n) {
  return () => n++;
};

let counter = createCounter(4);

console.log(counter());

let createC = function (n) {
//   let count = n;
  return function () {
    return n++;
  };
};

let cont = createC(0);
