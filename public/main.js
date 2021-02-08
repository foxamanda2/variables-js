function main() {
  //Assigning variables
  const name = 'Amanda Fox'
  const numCoffee = 4
  console.log(`${name} drinks ${numCoffee} cups of coffee`)
  // Assigning variables to aboutAmanda
  const aboutAmanda = {
    name: 'Amanda',
    luckyNum: 3,
    favoriteMov: 'Howls Moving Castle',
  }
  console.log(aboutAmanda)

  // Asking for questions for about me
  const userName = window.prompt('What is ya name?')
  const cupsOfCoffee = window.prompt('How many cups of coffee do you drink?')
  const favoriteMovies = window.prompt('What is your favorite movie?')
  const luckyNumber = parseFloat(window.prompt('What is your lucky number?'))
  console.log(
    `Hello ${userName}, you drink ${cupsOfCoffee} cups of coffee a day`
  )
  // Putting about me in object
  const aboutMe = {}
  aboutMe.name = userName
  aboutMe.luckyNumber = luckyNumber
  aboutMe.favoriteMovies = favoriteMovies

  console.log(aboutMe)

  // Asking for two numbers
  const firstOperand = parseFloat(window.prompt('Give me a first number: '))
  const secondOperand = parseFloat(window.prompt('Give me a second number: '))
  // Sum
  const sum = firstOperand + secondOperand
  // Difference
  const difference = secondOperand - firstOperand
  // Product
  const product = firstOperand * secondOperand
  // Quotient
  const quotient = firstOperand / secondOperand
  // Remainder
  const remainder = firstOperand % secondOperand
  // console.log Results
  console.log(
    `These are the results for ${firstOperand} and ${secondOperand}:\n The sum is ${sum}\n The difference is ${difference}\n The product is ${product}\n The quotient is ${quotient}\n The remainder is ${remainder}`
  )

  // Array of random numbers
  let numbers = [
    37,
    45,
    90,
    87,
    46,
    36,
    44,
    48,
    66,
    7,
    44,
    85,
    27,
    62,
    59,
    21,
    53,
    29,
    10,
    13,
    42,
    81,
    23,
    13,
    1,
    75,
    97,
    12,
    35,
    86,
    37,
    71,
    75,
    24,
    83,
    31,
    11,
    57,
    81,
    81,
    92,
    28,
    81,
    77,
    44,
    37,
    81,
    31,
    31,
    65,
    9,
    90,
    51,
    90,
    27,
    83,
    3,
    51,
    2,
    91,
    88,
    97,
    59,
    21,
    71,
    94,
    79,
    62,
    19,
    14,
    11,
    81,
    99,
    73,
    69,
    7,
    53,
    98,
    13,
    39,
    22,
    21,
    12,
    58,
    67,
    18,
    53,
    91,
    37,
    73,
    82,
    18,
    44,
    95,
    83,
    26,
    42,
    70,
    62,
    24,
  ]
  // Smallest number
  let smallest = numbers[0]
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < smallest) {
      smallest = numbers[index]
    }
  }
  // Largest number
  let largest = numbers[0]
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > largest) {
      largest = numbers[index]
    }
  }
  // Sum of Numbers
  let sumOfNumbers = 0
  for (let index = 0; index < numbers.length; index++) {
    sumOfNumbers += numbers[index]
  }
  // Average of Numbers
  let averageOfNumbers = sumOfNumbers / numbers.length
  const statistics = {}
  statistics.sum = sumOfNumbers
  statistics.average = averageOfNumbers
  statistics.smallest = smallest
  statistics.largest = largest
  console.log(statistics)

  // Adventure Mode
  // Sum of Odd
  let sumOfOdd = 0
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 == 1) {
      sumOfOdd += numbers[index]
    }
  }
  console.log(sumOfOdd)
  // Sum Of even
  let sumOfEven = 0
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 == 0) {
      sumOfEven += numbers[index]
    }
  }
  console.log(sumOfEven)

  // Playing around with JavaScript
  let orderedNumbers = []
  for (let index = 0; index < 11; index++) {
    orderedNumbers.push(index)
  }
  console.log(orderedNumbers)
  // Remove Last Item
  orderedNumbers.pop()
  console.log(orderedNumbers)

  // finding sum of array
  function sumNum(array) {
    let number = 0
    for (let index = 0; index < array.length; index++) {
      number += array[index]
    }
    return number
  }
  console.log(`Sum of the numbers is ${sumNum(orderedNumbers)}`)
  console.log(`The sum of your random numbers is ${sumNum(numbers)}`)

  // Finding Numbers with functions
  function numberSearch(array) {
    let bool = false
    for (let index = 0; index < array.length; index++) {
      if (array[index] == 3) {
        bool = true
      }
    }
    return `Does a 3 exist in this array: ${bool}`
  }
  console.log(numberSearch(orderedNumbers))
  console.log(numberSearch(numbers))
}

document.addEventListener('DOMContentLoaded', main)
