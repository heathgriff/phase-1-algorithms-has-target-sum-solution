function hasTargetSum(array, target) {
  // Write your algorithm here

  // iterate over numArray
  for (let i=0; i < array.length; i++) {
    // for each num, determine what num can be added to reach targetNum
    // ex: if num = 2 and targetNum = 5, then pairNum = 3
    const complement = target - array[i];
    // iterate over remaining nums in array
    for (let j = i + 1; j < array.length; j++) {
      //check if any remaining nums = complement
      // if yes, return true
      if (array[j] === complement) return true;
    }
  }
  // at end of array, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here

  for loop 1 = n steps
  for loop 2 = n * n steps (nested loop)
  return false = 1 step

  inner loop performs n iterations for every iteration of outer loop => O(n*n), aka O(n^2)
  therefore, time complexity = O(n^2), quadratic

  amount of memory needed grows linearly with size of input array
  therefore, space complexity = O(n)


*/

/* 
  Add your pseudocode here
  iterate over numArray
    - for each num, determine what num can be added to reach targetNum
      - ex: if num = 2 and targetNum = 5, then pairNum = 3
    - iterate over remaining nums in numArray
      - check if any of the remaining nums = pairNum
        - if yes, then return true
    at end of array, return false
*/

/*
  Add written explanation of your solution here
  hasTargetSum function checks if two numbers in an array add up to a specific target number. ex: if array = [1,2,3,4], it follows that if targetNum = 6 then return true; and if targetNum = 10 then return false

  edges: negative numbers? mult. solns? single-number arrays?
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}


module.exports = hasTargetSum;


// OPTIMIZED VERSION

  // PSEUDOCODE
  // create object to keep track of all nums
  // iterate over nums in array
  //   for current num, identify complement num that adds up to targetNum
  //   check if any keys in object is complement num to current num 
  //     if yes return true
  //   save current num as new key on object to check against rest of num
  // if end of array return false

// function hasTargetSum(array, target) {
//    // create object to keep track of all nums
//    const seenNums = {};
//   // iterate over nums in array
//     for (const num of array) {
//       //   for current num, identify complement num that adds up to targetNum
//       const complement = target - num;
//       //   check if any keys in object is complement num to current num 
//       //     if yes return true
//       if (seenNums[complement]) return true;
//       //   save current num as new key on object to check against rest of num
//       seenNums[num] = true;
//     }
//     // if end of array return false
//     return false;
// }

// time complexity = O(3n + 2) = O(n)
// space complexity = O(n)