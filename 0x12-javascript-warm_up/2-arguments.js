#!/usr/bin/node
let argt;
if (process.argv.length < 3) {
  argt = 'No argument';
} else if (process.argv.length === 3) {
  argt = 'Argument found';
} else {
  argt = 'Arguments found';
}
console.log(argt);
