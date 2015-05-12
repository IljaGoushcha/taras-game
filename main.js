// javascript needs semicolons
alert("hello world!");

var greeting = "how's it going?"
"hey" + " " + name + " " + greeting;

3+2;
9/2;
// in java script numbers are floats by default

9/0;
// will not give you an error, you'l get infininty

0.1+0.2 // => 0.3000000004
// do not compare floats!

typeof("0.2");
"string"
typeof(0.2);
"number"
typeof(false);
"boolean"
// get type of an entety

number.toString();
"10"
// .toString, notice cammel case with first letter lowered

// always invoke a method with () even if there is no argument passed in
// if you do not include the () you see the code of the function itself

parseFloat("10");
// converts string to number

//in js, use this instead of self

this.parseFloat("10");
// just like self.puts in Ruby

var num1 = prompt("enter a number");
// prompts user for an input

// assignment: in a new js file, write a short program to promt the user for
//three inputs (string or number) and then output the result of the mad lib
// via an alert

// mad lib example
// "Let's build a " + word_1 + "!It have lots of " + word_2 + "and livin a " + word_3;
//

// best practice to declare all variables at the begining
var num1, mum2, mum3, str1
// declare initial values separatly

// in js, always use === triple comparitor (threequals).
var weather = "sunny"
undefined
weather === "sunny";
true
weather === "rainy";
false

// conditionals
var weather = "sunny";
if weather === "sunny" {
  console.log("it's so nice out!");
} else if weather === "cloudy" {
  console.log("maybe better tomorrow");
} else {
  console.log("let's stay in and code");
}

// functiones
var functionName = function(arguments) {
  return
}

var square = function(number) {
  return = number*number; // return statement MUST be present
}

var cube = function(number) {
  return = Math.pow(number, 3);
}

var methodName = function() {
  x = 2;
  return true;
}

methodName();
console.log(x);
// returns 2 because x (without var in front of it) has global scope,
// so you can reference it or change it outside of the method

var methodName = function() {
  x = 2;
  var y = 3;
  return true;
}

// now y is local variable to the methodName
// when declaring var .... at the begining you asure that all your variables are local

var = names2 = ["Joh", "Paul", "jones"];
names2.jion('-')

var makeMoreExciting = function(element) {
  run element + "!!!!!";
}

myArray.forEach(makeMoreExciting);

pets.map(iHaveA);
pets.forEach(iHaveA);
