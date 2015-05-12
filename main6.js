var dragons, died_of_cold;
dragons = [];
alert("Long time ago there were dragons, what names?");

died_of_cold = function(array) {
  return array.shift();
}

died_crossing_river = function(array) {
  return array.pop();
}

for (i = 1; i < 5; i++) {
    dragons.push(prompt("enter dragon's name #" + i + ":"));
}

console.log("dragon's names are:");
console.log(dragons);

console.log("first died of cold:");
died_of_cold(dragons);
console.log(dragons);
console.log("now there are " + dragons.length + " dragons left");

console.log("last died crossing river:");
died_crossing_river(dragons);
console.log(dragons);
console.log("now there are " + dragons.length + " dragons left");
