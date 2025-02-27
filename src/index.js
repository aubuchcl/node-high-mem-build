const _ = require("lodash");
const moment = require("moment");
const firebase = require("firebase/app");
const puppeteer = require("puppeteer");

// Create a large data structure to increase processing time
const bigArray = Array.from({ length: 1e6 }, (_, i) => i);
const shuffledArray = _.shuffle(bigArray);

console.log("Current time:", moment().format());

// Simulate some computation
function heavyComputation() {
  return shuffledArray.map(num => num * Math.random());
}

console.log("Starting heavy computation...");
setTimeout(() => {
  console.log("Computation result:", heavyComputation().slice(0, 10));
}, 1000);
