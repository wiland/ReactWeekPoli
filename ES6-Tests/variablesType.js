/**
 * Var: Global, no block scope
 */
var variable = 60;

(function expalinVar() { //IIFE Immediate Invocation Function Expression
  var variable = 30;
  if (true) {
    var variable = 40;
  }
  console.log(variable);
})();

//Shows global value because inside the function a new scope is created when you use var
console.log(variable);

/**
 * Let: Local, block scope, reassignable
 */
(function expalinLet() { //IIFE Immediate Invocation Function Expression
  let letVar = 30;
  if (true) {
    let letVar = 45;
    console.log(letVar);
  }
  console.log(letVar);
})();

/**
 * Const: Local, block scope, no reassignable (but mutable)
 */
(function expalinConst() { //IIFE Immediate Invocation Function Expression
  const constVar = {name: "hi", age:30};
  constVar.age = 40; //Mutation
  console.log(constVar);
})();