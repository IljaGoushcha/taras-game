// enter a number between 10 and 100, and check if it IS 10-100, and see if it is devisible by 3
var num, remainder;

num = parseFloat(prompt("enter number from 10 to 100"));
while (num < 10 || num > 100) {
    num = parseFloat(prompt("enter number from 10 to 100"));
};


remainder = num%3;

if (remainder === 0) {
  alert("number is dvisible by 3");
} else {
  alert("number is NOT dvisible by 3");
};


