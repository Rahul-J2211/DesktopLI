// // // Closure function using an arrow function
// // const createAdder = (baseValue) => {
// //     return (a, b) => {
// //         let sum = baseValue + a + b;
// //         console.log(sum, "------------ closure function (arrow)");
// //         return sum;
// //     };
// // };

// // // const addWithBase = createAdder(10); // baseValue is 10
// // // addWithBase(5, 7); // Output: 22
// // const new2 = new1(5, 7);

// // const new1 = createAdder(10);
// // console.log(new1);


// // Input: nums = [2,7,11,15], target = 9
// // Output: [0,1]
// // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// var fizzBuzz = function(n) {
//     let answers = [];
//        for(let i=1;i<=n;i++){
//        let ternary=(i%3===0&&i%5===0)?answers.push("FizzBuzz"):(i%3===0)?answers.push("Fizz"):(i%5===0)?answers.push("Buzz"):answers.push(String(i));
//        }
//        return answers;
//     }


// let n=3;
// console.log(fizzBuzz(n));


// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isPowerOfTwo = function(n) {

//     let divide = Math.log2(n);
//     console.log("1 worked");
    
    
//     let dup = (Number.isInteger(divide))?true:false;
//     return dup;
    
    
//     };


// let answer =isPowerOfTwo(9);
// console.log(answer);

// var isPowerOfFour = function(n) {
//     function logBase(base, n) {
//     return Math.log(n) / Math.log(base);
//     }
//     function log4(n) {
//     return logBase(4, n);
//     }
    
// };

// // Testing the function
// console.log(isPowerOfFour(16));  // Output: 2
// // console.log(log4(64));  // Output: 3

// // // console.log(log4(2));  // Output: 3
// var isPowerOfFour = function(n) {
//     // Helper function to calculate the logarithm with base 4
//     let base = 4;
//     function logBase(base, n) {
//         return Math.log(n) / Math.log(base);
//     }

//     // Function to calculate log base 4
//     // function log4(n) {
//     //     return logBase(4, n);
//     // }

//     // Check if the number is a power of 4
//     let logResult = logBase(base, n);
//     return Number.isInteger(logResult);
// };

// // Testing the function
// console.log(isPowerOfFour(16));  // Output: true
// console.log(isPowerOfFour(15));  // Output: false


// var isPowerOfThree = function(n) {
//     if (n<=0) return false;
//     return(Number.isInteger(Math.log(n)/Math.log(3)))
    
// };

// console.log(isPowerOfThree(27));


let [a,b,c] = [1,,3];

console.log(b);