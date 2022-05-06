// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const xyzabc = 23;

const calcAge = (birthyear) => 2037 - birthyear;

console.log('hello');

console.log(calcAge(1991));

{
  "$or": [
    {
      "search_dropdown": "bone cancer"
    },
    {
      "bool": true
    }
  ]
}
*/
/* Coding Challenge #1

Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. 

Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:

1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.

2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  // for loop to add string values into array
  // number of days can be related index + 1
  // use join(' ... ') to turn array into a string

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(`${arr[i]}°C in ${i + 1} days`);
  }

  const forecast = newArr.join(' ... ');

  console.log(forecast);
}

printForecast(data2);
