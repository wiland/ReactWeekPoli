/**
 * Operador rest ... (Merge multiple arguments into an array)
 */
function forPayment(info, ...values) {
  const debt = values.reduce((acc, curr) => acc + curr);

  return `In ${info} you have to pay $${debt}`;
}

console.log(forPayment("January", 100, 200, 500, 80000));

/**
 * Operador spread ... (Spread an array into multiple arguments)
 */
// Sending params to a function
const debts = [100, 200, 500, 20000]
console.log(forPayment("January", ...debts));

// Add elements to an array
const initialDebt = 9000;
const newDebts = [ initialDebt, ...debts];
console.log(forPayment("January", ...newDebts));

let years = [ 2010, 2011, 2012, 2013 ];
console.log(years);

years = [ ...years, 2014, 2015, 2016, 2017, 2018 ];
console.log(years);


// Destructuring array
const point = [1.9, 60.5, "Country"];
const [ lat, lng, ...moreInfo ] = point;
console.log(lat, lng);
console.log(moreInfo);


// Destructuring object
const fullName = {
  firstName: "Pepe",
  secondName: "Antonio",
  lastName: "Perez",
  secondLastName: "Andrade"
}

const {firstName: name, lastName, nickName = "NO_NICKNAME"} = fullName;

console.log(name, lastName, nickName);
