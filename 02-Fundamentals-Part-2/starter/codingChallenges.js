/* Challenge 1 
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27


const calcAverage = (score1, score2, score3) => {
  return Number((score1 + score2 + score3)/3)
}
const avgDolphins = calcAverage(85,54,41)
const avgKoalas = calcAverage(23,34,27)
console.log(avgKoalas * 2)

function checkWinner(avgDolphins, avgKoalas) {
  return (avgDolphins > (avgKoalas * 2)
  ? console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`)
  : console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`)
  )
}

checkWinner(avgDolphins, avgKoalas)
*/

/* Challenge 2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44

function calcTip(bill) {
  return (bill > 50 && bill < 300) 
    ? Number((bill * .15).toFixed(2))
    : Number((bill * .2).toFixed(2))
}

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills, tips, totals)
*/

/* Challenge 3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: 

BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.


const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function() {
    this.bmi = Number((this.mass / (this.height ** 2)).toFixed(0))
    return  this.bmi
  }
}

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function() {
    this.bmi = Number((this.mass / (this.height ** 2)).toFixed(0))
    return this.bmi
  }
}
mark.calcBMI()
john.calcBMI()

console.log(mark.bmi > john.bmi 
  ? `${mark.firstName}'s BMI(${mark.bmi}) is greater than ${john.firstName}'s (${john.bmi})`
  : `${john.firstName}'s BMI(${john.bmi}) is greater than ${mark.firstName}'s (${mark.bmi})`
)

*/