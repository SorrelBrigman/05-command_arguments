#!/usr/bin/env node

let [,,...args] = process.argv;
let summed = 0;
let numbersArgs = args.map(parseFloat);
numbersArgs.forEach((value)=>summed+= value);

console.log(`the sum is ${summed}.`)
