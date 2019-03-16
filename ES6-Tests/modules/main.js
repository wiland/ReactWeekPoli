import alertMessage, { appName, changeTitle, Thing } from "./utils.js";

console.log(appName);
changeTitle("ES6 Modules Test");
console.log(appName);
console.log(alertMessage);

const thing = new Thing("Computer");
console.log(thing.print());
