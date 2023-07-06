var createCounter = function(n) {
    return ()=> n++
};

let counter = createCounter(4);

console.log(counter())