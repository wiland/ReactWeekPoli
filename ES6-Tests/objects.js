const car = {
  brand: "Chevrolet",
  type: "Camaro",
  versions: [
    {
      name: "RS",
      cc: 3600,
      power: 350
    },
    {
      name: "SS",
      cc: 6200,
      power: 480
    },
    {
      name: "ZL1",
      cc: 6200,
      power: 520
    },
  ]
};

console.log(car.type);

car.model = 2019;
console.log(car.model);
console.log(car["brand"]);

console.log(car.versions.forEach(version => {
  console.log(version.name);
}));

const data = ["Colombia", false, 40000, "History"];

console.log(data.forEach(data => {
  console.log(data + "-");
}));