#!/usr/bin/env node

let [,,...args] = process.argv;
let summed = 0;
args.forEach((value)=>{summed+= parseFloat(value)});

console.log(`the sum is ${summed}.`)
