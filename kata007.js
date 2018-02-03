// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.
//
// If you liked this kata, check out part 2!!

function expandedForm(num) {
  // split the number into individual digits
  let numArray = num.toString().split('')
  console.log(numArray)
  let zeroArray = []

  // add zeroes to each element of the array based on inverse of position
  for (i = 0; i < numArray.length; i++) {
    let iteration = []
    iteration.push(numArray[i].toString())

    for (i2 = numArray.length - i; i2 > 1; i2--) {
      iteration.push('0')
    }

    // if greater than zero, add number to a string
    if (iteration.join('') != 0) {
      zeroArray.push(iteration.join(''))
    }
  }
  return zeroArray.join(' + ')
}

// Clever and best practice answer
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");
