function persistence(num) {
  // start by defining a counter to output in the end. If the input is already a single digit, it never runs, thus outputting 0 to start
  let output = 0;

  // define my main loop that will run the bulk of the code
  const loop = (number) => {
  console.log("The current input is " + number)

  // convert the number to a string so that I can use the .length function to determine how many digits long it is
  let numString = number.toString();
  let numStringArray = [];

    // check to see if the stringified digit is longer than 1
    if (numString.length > 1) {
      let numStringArray = numString.split('');
      console.log("arrayed version is " + numStringArray);

      let newInput = parseInt(numStringArray.reduce((a, b) => a * b));
      console.log("The array, when multiplied is " + newInput)

      // increment the output counter up once
      output++

      // run the same loop again, but using the newly multiplied array as the new input
      loop(newInput)
    }
  }

  // call the loop function for the first time with the input 'num' given by the test
  loop(num)

  // once the digits are no longer > 1, it no longer runs the if statement code and steps down to returning the output variable
  // the output variable has incremented up every single time the if statement code ran
  return output
}
