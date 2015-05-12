var ilja = {
  red: ['Alewife', 'Davis', 'Porter'],
  green: ['Haymarket', 'Govt Center'],
  orange: [1, 4, 7, 2],
  age: 28,

  getStation: function(line) {
    console.log(line);
    console.log(typeof(this[line]));
    return this[line][0];
  }

}


line = "orange";
console.log(ilja.getStation(line));
console.log(ilja.red);
console.log(ilja[line]);

var x = [1,2,3,4,10].reduce(function(i,n){ return i*n});
console.log(x);
