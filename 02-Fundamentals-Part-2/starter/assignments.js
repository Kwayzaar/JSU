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
console.log(usPopulation)

// expression
const percentageOfWorld2 = function(population) {
  return (population/7900) * 100
}
console.log(percentageOfWorld2(325))

// Arrow functions
const percentageOfWorld3 = population => {
  return Number((population/7900) * 100).toFixed(0)
}
console.log(percentageOfWorld3(325))

// Functions calling other functions
function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the World.`
}
console.log(describePopulation("America", 325))