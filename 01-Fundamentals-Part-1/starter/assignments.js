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
language = "English"
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

// String and Tempate Literals
description = `${country} is in ${continent}, and it's ${population} people speak ${language}`
// console.log(description)

/*
// Taking Decisions: if / else statements
if (population > avgPopulation) {
  console.log(`${country}'s population is above average`)
} else {
  console.log(`${country}'s population is below average`)
}
*/

/* Type Conversion and Coercion
console.log('9' - '5') // 4
console.log('19' - '13' + '17') //617
console.log('19' - '13' + 17) //23
console.log('123' < 57) //false 
console.log(5 + 6 + '4' + 9 - 4 - 2) //1143
*/

/* Truthy and Falsy values 
let height = 1
let type = Boolean(height)
if (height){
  console.log(`height is ${type}` )
} else {
  console.log(`height is ${Boolean(height)}`)
}
*/

// Equality Operators
let numNeighbors = Number(prompt('How many neighbouring countries does your country have?'))
console.log(typeof numNeighbors)

if(numNeighbors === 1) { //will run else statement if input is "1"
  console.log('Only 1 border!')
} else if(numNeighbors > 1) {
  console.log('More than 1 border')
} else {
  console.log('No borders')
}