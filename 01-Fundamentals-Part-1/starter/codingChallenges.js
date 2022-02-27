
/*
CODING CHALLENGE 1
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

const markWeight1 = 78
const markHeight1 = 1.69
const markWeight2 = 95
const markHeight2 = 1.88
const markBMI1 = bmiCalc(markWeight1, markHeight1)
const markBMI2 = bmiCalc(markWeight2, markHeight2)

const johnWeight1 = 92
const johnHeight1 = 1.95
const johnWeight2 = 85
const johnHeight2 = 1.76
const johnBMI1 = bmiCalc(johnWeight1, johnHeight1)
const johnBMI2 = bmiCalc(johnWeight2, johnHeight2)

let markHigherBMI1 = markBMI1 > johnBMI1

let markHigherBMI2 = markBMI2 > johnBMI2

// console.log(markHigherBMI1, markHigherBMI2)

function bmiCalc(weight, height) { //make BMI calculator a function 
  return (weight / height**2).toFixed(1)
}


/* 
Coding Challenge 2 \

Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it. 

Your tasks: 
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's 

BMI (28.3) is higher than John's (23.9)!"
*/

if(markBMI1 > johnBMI1){
  console.log(`Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1})`)
} else {
  console.log(`John's BMI ${johnBMI1} is higher than Mark's (${markBMI1})`)
}