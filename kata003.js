// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
//
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
//
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// My answer
function findOutlier(integers){
  let oddEven = [];

  integers.forEach((int) => {
    oddEven.push(Math.abs(int % 2))
  })

  let even = []
  let odd = []

  oddEven.forEach((num)=>{
    if (num === 0) {
      even.push(num)
    } else {
      odd.push(num)
    }
  })

  if (even.length > odd.length) {
    return integers[oddEven.indexOf(1)]
  } else {
    return integers[oddEven.indexOf(0)]
  }
}

// Clever
function findOutlier(int){
  var even = int.filter(a=>a%2==0); // send values of all even numbers into even array
  var odd = int.filter(a=>a%2!==0); // send values of all odd numbers into odd array
  return even.length==1 ? even[0] : odd[0]; // if even array length is 1, return single even number, else do it to odd
}

// Best Practices
// example input [0,1,3,7,3,5349,43] expects output 0
const findOutlier = (integers) => {
  // return is a ternary operator {return (conditional ? return if true : return if false)}
  return integers.slice(0,3) // looks at first 3 elements in array (end arg not included) -> [0,1,3]
  .filter(even) // returns new array populated with all even numbers -> [0]
  .length >= 2 // checks to see that the even array.length is greater than 1 -> false
  ? integers.find(odd) // is so, return the first (and only) odd number in the original array -> doesn't run
  : integers.find(even); // else return the first (and only) even number in the original array -> 0
}

// returns true if the num is even
const even = (num) => {
  return (num % 2 == 0);
}

// returns true if num is odd
const odd = (num) => {
  return !even(num)
}
