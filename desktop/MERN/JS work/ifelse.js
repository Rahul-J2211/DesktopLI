// 1. Write a  program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

let Physics = 45;
let Chemistry = 55;
let Biology = 65;
let Mathematics = 75;
let Computer = 85;
let percentage = (Physics + Chemistry + Biology + Mathematics + Computer) / 5;
if (percentage >= 90) {
    console.log("Grade A");
} else if (percentage >= 80) {
    console.log("Grade B");
} else if (percentage >= 70) {
    console.log("Grade C");
} else if (percentage >= 60) {
    console.log("Grade D");
} else if (percentage >= 40) {
    console.log("Grade E"); 
} else if (percentage < 40) {
    console.log("Grade F");
}  else {
    console.log("Invalid Input");
}


// 2 .  Write a  program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

let basic = 25000;
let hra;    //hra => house rent allowance
let da;     // da => dearness allowance
let gross;  
if (basic <= 10000) {           // if basic salary is less than or equal to 10000
    hra = 0.20 * basic;         // hra = 20% of basic salary
    da = 0.80 * basic;          // da = 80% of basic salary
    gross = basic + hra + da;   // gross salary = basic salary + hra + da
    console.log(gross);         // print gross salary
} else if (basic <= 20000) {    // if basic salary is less than or equal to 20000
    hra = 0.25 * basic;         // hra = 25% of basic salary    
    da = 0.90 * basic;          // da = 90% of basic salary
    gross = basic + hra + da;   // gross salary = basic salary + hra + da
    console.log(gross);         // print gross salary
} else if (basic > 20000) {     // if basic salary is greater than 20000
    hra = 0.30 * basic;         // hra = 30% of basic salary               // 0.30 * 25000 = 7500
    da = 0.95 * basic;          // da = 95% of basic salary                // 0.95 * 25000 = 23500
    gross = basic + hra + da;   // gross salary = basic salary + hra + da  // 25000 + 7500 + 23500 = 40000
    console.log(gross);
} else {
    console.log("Invalid Input");   
}       



// 3. Write a P program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

let unit = 300;
let total;
// let ternary = (unit <= 50) ? 0.50 : (unit <= 150) ? 0.75 : (unit <= 250) ? 1.20 : 1.50;
// total = unit * ternary;
total  = (unit <= 50 ) ? unit * 0.50 : (unit <= 150) ? 25 + (unit - 50) * 0.75 : (unit <= 250) ? 100 + (unit - 150) * 1.20 : 220 + (unit - 250) * 1.50; 

// if (unit <= 50) {
//     total = unit * 0.50;
// } else if (unit <= 150) {
//     total = 25 + (unit - 50) * 0.75; // 25 = 50 * 0.50 (50 units * 0.50/unit) 
// } else if (unit <= 250) {
//     total = 100 + (unit - 150) * 1.20; // 100 = 25 + (100 units * 0.75/unit) 
// } else if (unit > 250) {
//     total = 220 + (unit - 250) * 1.50; // 220 = 100 + {(100 units * 1.20/unit)} 
// } 

total = total + (total * 20 / 100);
console.log(total);








// 4. Problem 1: Triangle Classifier
// Problem:
// Given three sides of a triangle, determine its type (equilateral, isosceles, or scalene).

// Input:
// Three positive integers representing the lengths of the sides.

// Output:
// A string indicating the type of triangle.

// Example:
// Input: 3 4 5
// Output: Scalene

function triangle(s1,s2,s3){
    let ternary2=(s1==s2 && s2==s3) ? "Equilateral" : (s1==s2 || s2==s3 || s1==s3) ? "Isosceles" : "Scalene";
    console.log(ternary2);
    // if(s1==s2 && s2==s3){
    //     console.log("Equilateral");
    // }else if(s1==s2 || s2==s3 || s1==s3){
    //     console.log("Isosceles");
    // }else{
    //     console.log("Scalene");
    // }
}
let s1,s2,s3;
     triangle(3,3,3);


// 5. Problem:
// Determine if a given year is a leap year.

// Input:
// A positive integer representing the year.

// Output:
// A boolean value indicating whether the year is a leap year.

// Example:
// Input: 2024
// Output: True

function leapYear(year){    
    let ternary3=(year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? true : false; 
    console.log(ternary3);
    // if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
    //     console.log("True");
    // }else{
    //     console.log("False");
    // }   
}   
leapYear(1900); 




// print the typeof for all datatypes
 
let a = 10;
console.log(typeof a);  

let b = "hello";    
console.log(typeof b);  

let c = true;
console.log(typeof c);      

let d = null;   
console.log(typeof d);  

let e = undefined;
console.log(typeof e);

let f = [1,2,3,4,5];
console.log(typeof f);

let g = {a:1,b:2,c:3};
console.log(typeof g);

let h = function(){};
console.log(typeof h);

let i = Symbol();
console.log(typeof i);







