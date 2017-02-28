// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//
// A sample callback we will use to test your code is:
// const callback =  function (error, sum) {
//   if (error || sum !== 88) {
//     error = error || new Error(`sum is ${sum}`);
//   }
//
//   done(error);
// };
//
// Use `grunt test` to test your code.

//There is only 10 minutes left, before submission at this point and I am not making enough progress, so I will write out how I would approach this if I had more time and what is going on.

//We are reading a file, so we are going to use fs.readFile, which takes that file name as the first parameter, options as the second and the callback function as the third. We want to account for an error when we are dealing with content that may not be a number (like a string), but then we want to write a variable called sum, that will take the sum of the previous numbers and add that to the new or nrext number that appear on each separated line.
//I know this sum function can be implemented with reduce, because it is similair to a situation that comes up in other javascript functions frequently and this is a good use of that array method.

//I think we still need to account for the amount of lines in a file, but I am running out of time at this point.

'use strict';

const fs = require('fs'); // jshint ignore: line

const sumLines = (ourfile, callback) => {
  fs.readFile(ourfile, 'utf-8', (err, lines) => {
    if(error){
      console.log(error.stack);
      return;
    }
    let
    let sum = lines.split('\n').reduce(()) => {

    }
  })

  callback(error, sum);
};

module.exports = {
  sumLines,
};
