//             // // // alert("welcome da!");
//             // // console.log("abcde");
//             // // console.log("abcde");
//             // // console.log("abcde");
//             // // let x=45;
//             // // console.log(x);


//             // // console.dir(x);

//             // // const person = {
//             // //     name: "Alice",
//             // //     age: 25,
//             // //     address: {
//             // //       city: "New York",
//             // //       country: "USA"
//             // //     }
//             // //   };
            
//             // //   console.dir(person);
//             // //   console.log(person);

//             // const element = document.body;
//             // // console.dir(element);
//             // console.log(element);


            
//             // var firstName="UserName"
//             //             var age=56
//             //             console.log(firstName);
//             //             var age=78
//             //             console.log(age);
//             //             var age =78

//             //             let user='username'
//             //             user="name"
//             //             let user2="lastname"
                    
//             //             console.log(user);


//             //             // let name ="javascript";
//             //             // let name = "werty";
//             //             // console.log(name)

//             //              const userNAme="javascript"
//             //     userNAme='werty'
//             //     console.log(userNAme);




//             // to combaoinemore than one value andd get a new result 
//             // operator + two operands 

//             // operatores

//             // 1. arthematic => + - * / %
//             // 2. comparison => == < > <= >= === !== !=
//             // 3. logical => && || !
//             // 4. assignment => =
//             // 5. unary => += -= ... ++ --
//             // 8.typeof operators => typeof



//             // 6. ternary => ?:
//             // Non primitive data types operator 
//             // 7.delete operators => delete
//             // 9.special operators => spread, rest 


//             // 1. arthematic => + - * / %

//             // let num1=7,num2=8
//             // // let finalAnswer=num1+num2 // 7+8 => 15
//             // // let finalAnswer=num1-num2  // 7-8 => -1
//             // // let finalAnswer=num1*num2  // 7*8 => 56
//             // // let finalAnswer=num2/num1  // 7/8 => 
//             // let finalAnswer=num2%num1  // 7%8 => -1

//             // console.log(finalAnswer,"addition");


//             // comparison Operator: 

//             // let num1=9, num2 =10 

//             // console.log(num1<num2) // 9<10 =>  true 
//             // console.log(num1>num2) // 9>10 => false
//             // console.log(num1>=num2) // 9>=10 => false 
//             // console.log(num1<=num2) // 9<=10 => true 
//             // console.log(num1==num2) // 9==10 => false 
//             // console.log(num1!=num2) // 9!=10 => true 

//             // console.log(num1===num2) // 10 === "10" => value => 10 datatype num1=> number num2=>string   
//             // value => 10 === 10 
//             // D.T => number === string 
//             // false 

//             // console.log(num1 !== num2) // 10 === "10" => value => 10 datatype num1=> number num2=>string   
//             // value => 10 !== 10  => false 
//             // D.T => number !== string => true 
//             // true  


//             // Logical operator : 

//             // 1. AND (&&) => true && true => true , true && false => false => loginpage
//             // 2. OR (||) => true || false => true , false || false => false => 
//                 // email or phone 
//             // 3. Not (!)=> true => false , false => true 


//             // console.log((8<9)&&(19<10)) // 8<9 => true , 19<10 => false => true && false => false  

//             // console.log((8<9)||(19<10)) // 8<9 => true , 19<10 => false => true && false => true 

//             // console.log(!(8<9));
//             // console.log(!(19<10));

//             // Truth table 
//             /** 
//             A         B          A&&B         A||B           !A            !B

//             True      True        true        true          false         false

//             True      False       False        true          false        true

//             False      True       false        true          true      false  

//             false      false       false      false       true          true 

//             */

//             // === => identical equal 
//             // !== => non identical equal 
//             // Note :  =, ==  , === diference ?

//             // let number =10 

//             // number => variable 
//             // =  => assignment operator
//             // 10 => value 


//             // unary operator 


//             // let num=10

//             // num=num+5 (or) => num+=5

//             // num++ => num+1 
//             // ++num => 1+num
//             // console.log(num);





    


// // conditioanl Statements :

// /**
//  *  if -else
//  *  Nestedif
//  * Ladder if (elseif)
//  * swich-case
//  *  ternary operator
//  */

// // if-else

// // Syntax :

// // if (condition) {
// // true
// // true block will execute
// // }

// // example problem :

// /**
//  * Given an integer M perform the following conditional actions:
//  * 
// If M is multiple of 3 and 5 then print "Good Number" (without quotes).
// If M is only multiple of 3 and not of 5 then print "Bad Number" (without quotes).
// If M is only multiple of 5 and not of 3 then print "Poor Number" (without quotes).
// If M doesn't satisfy any of the above conditions then print "-1" (without quotes).
//  */

// // check the num is even or odd .

// // == , ===

// // 1. js
// // 2. compoariosn
// // 3. data type

// // let num = 8;

// // if (num %2 === 0) {  // 4 % 2 ===0 =>  0===0 => T
// //   console.log("It is even number ",num)
// // }

// // if (num % 2 === 0) {
// //   // 5 % 2 ===0 =>  1===0 => F
// //   console.log("It is even number ", num);
// // } else {
// //   console.log("it is odd number ", num);
// // }

// // If M is multiple of 3 and 5 then print "Good Number" (without quotes).

// // if (multipleNumber % 3 === 0) {
// //   // 9%3===0 => 0===0 =>T
// //   if (multipleNumber % 5 === 0) {
// //     // 9%5===0=>4==0=>F
// //     console.log("Good Number");
// //   }
// // }

// let multipleNumber = 8;

// // If M is multiple of 3 and 5 then print "Good Number" (without quotes).
// if (multipleNumber % 3 === 0 && multipleNumber % 5 === 0) {
//   console.log("Good Number");
// }
// // If M is only multiple of 3 and not of 5 then print "Bad Number" (without quotes).
// else if (multipleNumber % 3 === 0 && multipleNumber % 5 !== 0) {
//   console.log("Bad Number");
// }
// // If M is only multiple of 5 and not of 3 then print "Poor Number" (without quotes).
// else if (multipleNumber % 3 !== 0 && multipleNumber % 5 === 0) {
//   console.log("poor Number");
// }
// // If M doesn't satisfy any of the above conditions then print "-1" (without quotes)
// else {
//   console.log("-1");
// }

// // switch -case

// // switch(condition){

// //     case 1 :
// //         //
// //         break;
// //     case 2 :
// //         //
// //         break;
// //     default:
// //         //

// // }

// // weekdays 0 -7 0 => sunday 7 => saturday

// let day = 3;
// let dayofNumber;

// switch (day) {
//   case 0:
//     dayofNumber = "sunday";
//     console.log("sunday");
    
//     break;
//   case 1:
//     dayofNumber = "monday ";
//     console.log("monday");
//     break;
//   case 2:
//     dayofNumber = "Tuesday  ";
//     console.log("Tuesday");
//     break;
//   case 3:
//     dayofNumber = "Wednesday";
//     console.log("Wednesday");
//     break;
//   default:
//     dayofNumber = "Invalid day";
// }
// console.log(dayofNumber); // wednesday


// // Ternary Operator : 

// syntax => (condition)?('true block'):("false block")

// // if (num % 2 === 0) {
// //   // 5 % 2 ===0 =>  1===0 => F
// //   console.log("It is even number ", num);
// // } else {
// //   console.log("it is odd number ", num);
// // }

// let num=8
// let ternary=(num % 2 === 0)?console.log("It is even number ", num):console.log("it is odd number ", num)

// // let ternary = (9%2===0)?'It is even number':"it is odd number"
// // let ternary = (1===0)?'It is even number':"it is odd number"
// // let ternary = (False)?'It is even number':"it is odd number"
// // it is odd number



// // Task : 
// // 1. typeof 
// // 2. handwritten notes 
// // 3. problem daily 5 sums
    

// // storing a more than one value in a single variable of same data type . => array  

// let array=[1,2,3,4,5,6,7,8,9,10]
// console.log(array);

//  let array1=[]  // empty array 

// // array1[0] // [0] => index

// array1[0]=4,
// array1[1]=5
// array1[3]=7

// console.log(array1);



// // storing a more than one value in a single variable of differnt data type .=> obj

// let obj ={}

// // key:value;

// let studDetails={
//     name:'Arun',
//     age:25,
//     dob:'15-5-2002',
//     address:"chennai",
// }

// console.log(studDetails);

// // arry of objects 

// [{
//     name:'Arun',
//     age:25,
//     dob:'15-5-2002',
//     address:"chennai",
// },{
//     name:'Arun',
//     age:25,
//     dob:'15-5-2002',
//     address:"chennai",
// },{
//     name:'Arun',
//     age:25,
//     dob:'15-5-2002',
//     address:"chennai",
// },{
//     name:'Arun',
//     age:25,
//     dob:'15-5-2002',
//     address:"chennai",
// },{
//     name:'Arun',
//     age:25,
//     dob:'15-5-2002',
//     address:"chennai",
// }]  // arry of objects...

let array=[1,2,3,4,5,6,7,8,9,10]
console.log(array,"array");

// for(iniatal of targetarray){
//     //loop condiation
// }

for(let name of array ){
    console.log(name, "name");  
}  // array loop 



let studDetails={
    name:'Arun',
    age:25,
    dob:'15-5-2002',
    address:"chennai",
}

// for(iniatal in targetobject){
//     //loop condiation
// }

for(let key in studDetails){
    console.log(studDetails[key]);   
}