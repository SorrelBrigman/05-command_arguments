#!/usr/bin/env node

let [,,...args] = process.argv;
let summed = 0;
let numbersArgs = args.map(parseFloat);
numbersArgs.forEach((value)=>summed+= value);
var reduced = numbersArgs.reduce((a, b)=> a+b);

console.log(`the sum is ${reduced}.`)
