var string1 = prompt("enter your favorit food");
var string2 = prompt("enter your favorite location");
var string3 = prompt("enter your your age");
var str1 = "you like to eat " + string1 + " at the top of " + string2 + ", " + string3 + " times per day!";

console.log(str1);
alert(str1);

var str4 = prompt("now enter some word");
var num1 = parseFloat(prompt("and some number"));

str5 = "";
for (i = 0; i < num1; i++) {
    str5 += str4 + " ";//str5 + " " + str4;
}

alert(str5);


