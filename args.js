#!/usr/bin/env node

//get the arguments you need without the first two default arguments from process.argv
//use deconstruction
let [,,...args] = process.argv;
//use .map to convert the arguements into numbesr
let numbersArgs = args.map(parseFloat);
console.log("args", args)
//if args isn't an array with a length of 0, assign reduce to the sum of it's parts
//otherwise make reduced = to zero
var reduced = (args.length === 0) ? 0 : numbersArgs.reduce((a, b)=> a+b);
console.log(`the sum is ${reduced}.`)
