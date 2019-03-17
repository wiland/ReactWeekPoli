const cars = [
  {
    brand: "Chevrolet",
    name: "Camaro",
    cc: 6200,
    miles: 50000
  },
  {
    brand: "Nissan",
    name: "Skyline",
    cc: 2500,
    miles: 120000
  },
  {
    brand: "Nissan",
    name: "GTR",
    cc: 3600,
    miles: 15000
  },
  {
    brand: "Lamgorghini",
    name: "Huracan",
    cc: 5700,
    miles: 24000
  },
  {
    brand: "BMW",
    name: "M240",
    cc: 3000,
    miles: 10000
  },
];


////// MAP
/**
 * ES5
 */
let carNames = [];
for (let i = 0; i < cars.length; i++) {
  carNames.push(cars[i].name);
}
console.log(carNames);

/**
 * ES6
 */
let carNamesES6 = cars.map(car => car.name);
console.log(carNamesES6);


/**
 * ES6 FILTER
 */
let carNamesWithSmallMiles = cars.filter(car => car.miles < 40000).map(car => car.name);
console.log(carNamesWithSmallMiles);

/**
 * ES6 FIND
 */
let carNameFromNissan = cars.find(car => car.brand < "Nissan");
console.log(carNameFromNissan);

/**
 * ES6 EVERY
 */
let haveCarsMoreThan2000cc = cars.every(car => car.cc > 2000);
console.log(haveCarsMoreThan2000cc);

/**
 * ES6 SOME
 */
let isThereAnyFerrari = cars.some(car => car.name === "Ferrari");
console.log(isThereAnyFerrari);

/**
 * ES6 REDUCE
 */
let totalMilageOfCars = cars.reduce((acc, car) => acc + car.miles, 0);
console.log(totalMilageOfCars);
