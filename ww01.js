/* Write a function that rotates a list by k elements. For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2].
Bonus: Try solving this without creating a copy of the list. How many swap or move operations do you need? */

// make a function that takes an array and amount of times to rotate
// chop off the first couple of elements and save into shallow array
// push shallow array to the end of the first array
const array = [0,1,2,3,4,5,6,7,8,9]
const k = 12
console.log(`Original array is ${array}`);
console.log(`The k amount of times rotating the array is ${k}`);

const arrayRotator = (array, k) => {
  const newArray = array.splice(0, k % array.length)
  return array.concat(newArray)
}

console.log(arrayRotator(array, k));

// Neo's refactor
const rotate = (array, k) => {
  return array.concat(array.splice(0, k % array.length))
}

// Alex's code
const rotate = (array, shifts) => {
  array.push(...array.splice(0, shifts))
  return array
}
