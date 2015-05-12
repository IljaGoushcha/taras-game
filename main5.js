// prime or not

var num, isPrime;

num = parseFloat(prompt("enter number to check for being prime"));

isPrime = function(num) {
  var divisor, remainder;
  divisor = num - 1;

  while (divisor != 2) {
    remainder = num % divisor;
    debugger
    if (remainder === 0) {
      return false;
    } else {
    };

    divisor = divisor - 1;
  }
  return true;
}

alert(isPrime(num));

