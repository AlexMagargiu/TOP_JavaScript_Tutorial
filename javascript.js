//  FUNDAMENTALS PART 1

//let message = 'Hello!';
//alert(message);

//let user = 'John'
//let age = 25; 
//let messageTwo = 'Hello';

//let messageThree;
//messageThree = 'Hello!';
//messageThree = 'World!';
//alert(messageThree);

//let hello = 'Hello world!';
//let messageFour;
//messageFour = hello;
//alert(hello);
//alert(messageFour);

//et userName;
//let test123;

//let $ = 1;
//let _ = 2;
//alert($ + _);

//const myBirthday = '18.04.1982';

//const COLOR_RED = "#F00";
//const COLOR_GREEN = "0F0";
//const COLOR_BLUE = "#00F";
//const COLOR_ORANGE = "#FF7F00";
//let color = COLOR_ORANGE;
//alert(color);

// Task 1
//let admin;
//let name = "John";
//admin = name;
//alert(admin);

//Task 2
//let ourPlanetName = "Earth";
//let currentUser = "John";

//Task 3
//const BIRTHDAY = '18.04.1982';
//const age = someCode(birthday);

//const myInt = 5;
//const myFloat = 6.667;

//const lotsOfDecimal = 1.766584958675746364;
//const twoDecimalPlaces = lotsOfDecimal.toFixed(2);

//let myNumber = "74";
//myNumber = Number(myNumber) + 3;

//const num1 = 10;
//const num2 = 50;

//let num3 = 4
//num3++;

//let x = 1;
//x = -x;
//alert(x);

//let y = 1, z = 3;
//alert(z - y);

//alert(5 % 2);
//alert(8 % 3);
//alert(8 % 4);

//alert(2 ** 2);
//alert(2 ** 3);
//alert(2 ** 4);

//alert(4 ** (1/2));
//alert(8 ** (1/3));

//"" + 1 + 0 // 10
//"" - 1 + 0 // -1
//true + false // 1
//6 / "3" // 2
//"2" * "3" // 6
//4 + 5 + "px" // 9px
//"$" + 4 + 5 // $45
//"4" - 2 // 2
//"4px" - 2 // NaN
//"  -9  " + 5 //    -9  5
//"  -9  " - 5 // -14
//null + 1 // 1
//undefined + 1 // NaN
//" \t \n" - 2 // -2

//let a = prompt("First number?", 1);
//let b = prompt("Second number?", 2);

//alert( +a + +b); // 3

//console.log(23 + 97);

//console.log(13 + 14 + 15 + 16 + 17 + 18);

//console.log((4 + 6 + 9) / 77);

//let a = 10;
//console.log(a);
//console.log(9 * a);
//let b = 7 * a;
//console.log(b);

//let max = 57;
//let actual = max - 13;
//let percentage = actual / max;
//console.log(percentage);



//FUNDAMENTALS PART 2

/*const string = "The revolution will not be televised.";
console.log(string);

const sgl = 'Single quotes.';
const dbl = "Double quotes";
console.log(sgl);
console.log(dbl);

const sglDbl = 'Would you eat a "fish supper"?';
const dblSgl = "I'm feeling blue.";
console.log(sglDbl);
console.log(dblSgl);

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting);

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined);

const name2 = "Front ";
const number = 242;
console.log(`${name2}${number}`);

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100 }%.`;
console.log(output);*/

/* 5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false */

//TASK 1    
//Write an if condition to check that age is between 14 and 90 inclusively.
//“Inclusively” means that age can reach the edges 14 or 90.
/* let age = 25;
if (age >= 14 && age <= 90){
    alert("Valid age");
}

//TASK 2
//Write an if condition to check that age is NOT between 14 and 90 inclusively.
//Create two variants: the first one using NOT !, the second one – without it.
//1.
let age2 = 30;
if (age2 <= 14 || age2 >= 90){
    alert("Age not valid");
}

//2.
let age3 = 35;
if (!(age3 >= 14 && age3 <= 90)){
    alert("Age not valid");
}

//TASK 3
//Write the code which asks for a login with prompt.
//If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
//The password is checked as follows:
//If it equals “TheMaster”, then show “Welcome!”,
//Another string – show “Wrong password”,
//For an empty string or cancelled input, show “Canceled”
let userName = prompt("Who's there?", '');
if (userName === "Admin") {
  let pass = prompt("Password?", '');
  if (pass === "TheMaster") {
    alert("Welcome!");
  } else if (pass === '' || pass === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName === '' || userName === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
} */


//TASK 1 ANOTHER TUTORIAL
//Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
//If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
/* let answer = prompt("What is the official name of JavaScript", "");
if (answer === "ECMAScript"){
  alert("Right!");
} else {
  alert("You don't know? ECMAScript");
}

//TASK 2
//Using if..else, write the code which gets a number via prompt and then shows in alert:
//1, if the value is greater than zero,
//-1, if less than zero,
//0, if equals zero.
//In this task we assume that the input is always a number.
let number = prompt("Type in a number", '');
if (number > 0){
  alert("1");
} else if (number < 0){
  alert("-1");
} else {
  alert("0");
}

//TASK 3
//Rewrite this if using the conditional operator '?':
//let result;
//if (a + b < 4) {
//  result = 'Below';
//} else {
//  result = 'Over';
//}

let result;
(a+b < 4) ? result = "Below" : result = "Over";

//TASK 4
//Rewrite if..else using multiple ternary operators '?'.
//For readability, it’s recommended to split the code into multiple lines.
let message;
if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} */

//let message = (login === "Employee") ? "Hello" : (login === "Director") ? "Greetings" : (login === '') ? "No login" : ''; 


//TASK 1 Functions
//The following function returns true if the parameter age is greater than 18.
//Otherwise it asks for a confirmation and returns its result.
/* function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
} */
//Rewrite it, to perform the same, but without if, in a single line.
//Make two variants of checkAge:
//Using a question mark operator ?
//Using OR ||

//1.
/* function checkAge(age){
  return (age > 18) ? true : confirm("Did your parent allow you?");
}

//2.
function checkAge2(age){
  return (age > 18) || confirm("Did you parents allow you");
}

//TASK 2 Functions
//Write a function min(a,b) which returns the least of two numbers a and b.
//For instance:
//min(2, 5) == 2
//min(3, -1) == -1
//min(1, 1) == 1

function min(a,b){
  if (a < b){
    return a;
  } else {
  return b;
  }
} */

//TASK 1 ARROW FUNCTIONS
/* Replace Function Expressions with arrow functions in the code below:
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
); */

/* function aks(question, yes, no){
  if(confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed"),
  () => alert("You didn't agree")
); */

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {
  console.log(cat);
}

let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;
while (i>=0){
  const para = document.createElement('p')
  if (i === 10){
    para.textContent = "Countdown 10";
  }else if (i === 0){
    para.textContent = "Blast off!"
  }else {
    para.textContent = i;
  }
  output.appendChild(para);
  i--;
}



const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
for (const person of people) {
  if (person === 'Phil' || person === 'Lola') {
    refused.textContent += `${person}, `;
  } else {
    admitted.textContent += `${person}, `;
  }
}

