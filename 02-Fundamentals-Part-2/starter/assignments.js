// Functions
function describeCountry(country, population, capitalCity) {
  console.log(`${country} has ${population} people and it's capital city is ${capitalCity}.`)
}

describeCountry('America', "350,000,000", 'Washington D.C.')

// Function declaration vs. Expressions

// declaration
function percentageOfWorld1(population) {
  return (population/7900) * 100
}

const usPopulation = percentageOfWorld1(325)
console.log(usPopulation)

// expression
const percentageOfWorld2 = function(population) {
  return (population/7900) * 100
}
console.log(percentageOfWorld2(325))

// Arrow functions
const percentageOfWorld3 = population => (population/7900) * 100
console.log(percentageOfWorld3(325))