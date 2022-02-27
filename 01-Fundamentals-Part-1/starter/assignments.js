// VALUES AND VARIABLES 
const country = "United States of America"
const continent = "North America"
let population = 329000000
const isIsland = false 
let language 



// console.log(country)
// console.log(continent)
// console.log(population)

/*
// DATA TYPES
console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)
*/

// let, const, var
language = "english"
// isIsland = true

// Basic operators 
let finlandPopulation = 6000000
let avgPopulation = 33000000
let description = "Portugal is in Europe, and its 11 million people speak portuguese"

// console.log(population / 2)
// console.log(population + 1)
// console.log(population++) //the incrementor will mutate the value of population
// console.log(finlandPopulation > population)
// console.log(population > avgPopulation)

/*
CODING CHALLENGE
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/


let markWeight1 = 78
let markHeight1 = 1.69
let markWeight2 = 95
let markHeight2 = 1.88
let markBMI1 = bmiCalc(markWeight1, markHeight1)
let markBMI2 = bmiCalc(markWeight2, markHeight2)

let johnWeight1 = 92
let johnHeight1 = 1.95
let johnWeight2 = 85
let johnHeight2 = 1.76
let johnBMI1 = bmiCalc(johnWeight1, johnHeight1)
let johnBMI2 = bmiCalc(johnWeight2, johnHeight2)

let markHigherBMI1 = markBMI1 > johnBMI1
console.log(markHigherBMI1)

let markHigherBMI2 = markBMI2 > johnBMI2
console.log(markHigherBMI2)

function bmiCalc(weight, height) { //make BMI calculator a function 
  return weight / height ** 2
}
