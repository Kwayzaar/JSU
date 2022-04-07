// Functions
function describeCountry(country, population, capitalCity) {
  console.log(`${country} has ${population} people and it's capital city is ${capitalCity}.`)
}

describeCountry('America', "350,000,000", 'Washington D.C.')

// Function declaration vs. Expressions

// declaration
function percentageOfWorld1(population) {
  return Number(((population/7900) * 100).toFixed(0))
}

const usPopulation = percentageOfWorld1(325)
// console.log(usPopulation)

// expression
const percentageOfWorld2 = function(population) {
  return (population/7900) * 100
}
console.log(percentageOfWorld2(325))

// Arrow functions
const percentageOfWorld3 = population => {
  return Number((population/7900) * 100).toFixed(0)
}
// console.log(percentageOfWorld3(325))

// Functions calling other functions
function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the World.`
}
console.log(describePopulation("America", 325))

// Arrays
const populations = [329, 1400, 56, 128]
console.log(populations.length === 4 ? true : false)

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])]
console.log(percentages)

// Basic Array Operations
const countryArr = ["Brazil", "Chile", "Peru"]

// Add element to end
const addCountry = countryArr.push("Utopia")
console.log(countryArr)
console.log(addCountry)

// Remove last element
countryArr.pop()
console.log(countryArr)

if (!countryArr.includes("Germany")){
  console.log("Probably not a central European country")
}

  // Replace a country using indexOF
countryArr[countryArr.indexOf("Chile")] = "Bolivia"
console.log(countryArr)

// Objects
const myCountry = {
  country: "America",
  capital: "Washington D.C.",
  language: "English",
  population: 325,
  neighbors: ["Canada", "Mexico"]
}

// Dot vs Bracket notation
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`, myCountry.population += 2, myCountry['population'] -= 2)

// Object methods
const jonas = {
  firstName: 'Jonas',
  lastName: 'Lee',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function() {  //function inside an object is a method
    
    this.age = 2037 - this.birthYear //'this' is a property in this object
    return this.age;
  },

// Challenge: write a method that return string that summarizes data about Jonas

  summarizeJonas: function() {
  return `${this.firstName} is a ${this.calcAge(this.birthYear)}-year-old teacher, and he ${this.hasDriversLicense === true ? "has" : "does not have"} a driver's license`
  }

}
console.log(jonas.calcAge())
console.log(jonas.summarizeJonas())

// for (let voter = 1; voter <= 50; voter++) {
//   console.log(`Voter number ${voter} is currently voting`)
// }

// Looping arrays, Break and Continue
// const populations = [329, 1400, 56, 128]
const percentages2 = []

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]))
}

console.log(percentages2)

// Looping backwards, loops in loops 
const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']]

for(let i = 0; i < listOfNeighbors.length; i++) {
  for(let j = 0; j < listOfNeighbors[i].length; j++){
    console.log(`Neighbors: ${listOfNeighbors[i][j]}`)
  }
}