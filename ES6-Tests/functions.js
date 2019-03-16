/**
 * Function declaration
 */
function calc(a, b) {
  return a + b;
}
const solution = calc(1, 2);
console.log(solution);


/**
 * Function expression
 */
const solutionFn = function (a, b) {
  return a + b;
}

console.log(solutionFn(1,4));

/**
 * Functions as a method (Object prop)
 */
const person = {
  name: "Juan",
  callPerson: function() {
    return "Hi " + this.name;
  } 
}

console.log(person.callPerson());

/**
 * Default params
 */
function multiply(x, times = 10) {
  return x * times;
}

console.log(multiply(2));


/**
 * Arrow functions
 */
const arrowSum = (a, b) => a + b;
console.log(arrowSum(8, 9));
