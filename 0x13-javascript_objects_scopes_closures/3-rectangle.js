#!/usr/bin/node
module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) { [this.width, this.height] = [w, h]; }
  }

  print () {
    // prints width & height shape with X
    console.log(('X'.repeat(this.width) + '\n').repeat(this.height).split('')
      .slice(0, -1).join(''));
  }
};
