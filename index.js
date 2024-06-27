// //es5
// /**/
// var person="ana";
// console.log(person);

// const area=12;
// console.log(area);
// let people="ram";
// people="sita"
// console.log(people);

// //interactions
// alert("My name is ana");
// //typeconrson
// const age =prompt("how old are you?");
// console.log(Number(age));
// //confirm
// const isValid=confirm("are you above 18?");
// console.log(isValid);

// //wap that ask fr principle inerest rate and time alert thb interest amount
//  const P=prompt("insert principle amount:");
//  console.log(Number(P));

//  const T=prompt("insert time:");
//  console.log(Number(T));

//  const R=prompt("insert rate:");
//  console.log(Number(R));

// const I = (Number(P) * Number(R) * Number(T)) / 100;
// console.log("The interest amount is:", I);
// alert(`The interest amount is: ${I}`);
// //string literal

// //type coversion/coercion
// const num=String(10);
// const num1=Number(num);

//wap that ask for their gender (m/f)

// const gender = prompt("Enter your gender (m/f)");
// console.log(String(gender));

// if (gender === "m") {
//     alert("You are male");
// } else if (gender === "f") {
//     alert("You are female");
// } else {
//     alert("error");
// }

// const gender = 'm';
// gender === 'm' ? alert("You are male") : alert("You are female");

// const gender = "m"
//   ? alert("You are male")
//   : gender === "f"
//   ? alert("You are female")
//   : alert("others");
//ternary opt

// = assignment == datatype && data value === + boolean
// condition check garnu xa vane ===

//codn(m)? true :false

// const gender = "m";
// switch (gender) {
//   case "m":
//     alert("you are male");
//     break;
//   case "f":
//     alert("you are female");
//     break;
//   case "o":
//     alert("you are others]");
//     break;
//   default:
//     alert("invalid Gender");
// }

//wap to calculate grade
//>80 A
//60-80 B
// const score = 85; // Example score

// let grade;

// if (score > 80) {
//   grade = "A";
// } else if (score >= 60) {
//   grade = "B";
// } else {
//   grade = "C"; // assuming any score below 60 is a C
// }

// switch (grade) {
//   case "A":
//     console.log("Grade is A");
//     break;
//   case "B":
//     console.log("Grade is B");
//     break;
//   case "C":
//     console.log("Grade is C");
//     break;
//   default:
//     console.log("Invalid grade");
// }

// const score = 85;

// let grade;

// switch (true) {
//     case (score > 80):
//         grade = 'A';
//         break;
//     case (score >= 60 && score <= 80):
//         grade = 'B';
//         break;
//     default:
//         grade = 'C';
// }

// switch (grade) {
//     case 'A':
//         console.log("Grade is A");
//         break;
//     case 'B':
//         console.log("Grade is B");
//         break;
//     case 'C':
//         console.log("Grade is C");
//         break;
//     default:
//         console.log("Invalid grade");
// }

// const score = 80;
// let grade;
// switch (true) {
//   case score > 80:
//     alert("your grade is A");
//     break;
//   case score >= 60 && score <= 80:
//     alert("your grade is A");
//     break;
//   default:
//     alert("your grade is A");
// }

// || or && and ! not
//wap js program to ask for username and password
//if username === password
//allert welcome admin
// //alert invald crdentaals
// const username=""

// const username = "enter your username";
// console.log(string(username));
// const password = "enter your password";
// console.log(String(password));

// if (username === password) {
//   alert("Welcome admin!!", username);
// } else {
//   alert("invalid credentials");
// }
// ///
// username === "ana" && password === "ana" ? "admin!" : "invalid";

//mux of 13 using while loop
// let multiplier = 1;
// const number = 13;

// while (multiplier <= 10) {  // Multiplication table up to 10
//     const result = number * multiplier;
//     console.log(`${number} * ${multiplier} = ${result}`);
//     multiplier++;

// let n = 1;
// const m = 13;

// while (n <= 10) {
//   const result = n * m;
//   console.log(`${n}*${m}=${result}`);
//   n++;
// }
// // const string4 =new String(""A string object)
// const fname=""
// const lname=""
// //o/p ""full name //proper case ma dekhaune
//wap that add number formatt
//10000=>10,000

const fname = "Anamika";
const lname = "Rai";

const fullName =
  fname.charAt(0).toUpperCase() +
  fname.slice(1).toLowerCase() +
  " " +
  lname.charAt(0).toUpperCase() +
  lname.slice(1).toLowerCase();

console.log(fullName);

// const fname = 'Anamika';
// const lname = 'Rai';

// const fullName = fname.slice(0, 1).toUpperCase() + fname.slice(1).toLowerCase() + ' ' + lname.slice(0, 1).toUpperCase() + lname.slice(1).toLowerCase();

// console.log(fullName);
