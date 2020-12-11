const tinygradient = require("tinygradient");

// using varargs
let gradient = tinygradient('red', 'green', 'blue');

console.log(gradient.stops);