var MBTA = {
  red: ['Alewife', 'Davis', 'Porter', 'Harvard', 'Central', 'Kendall', 'Park St', 'South Station'],
  green: ['Haymarket', 'Govt Center', 'Park St', 'Boylston', 'Arlington', 'Copley'],
  orange: ['North Station', 'Haymarket', 'Park St', 'State', 'Downtown', 'Back Bay', 'Forest Hills'],
  startLine: function() {
    startLine = prompt("Enter start line:");
    return startLine;
  },
  startStation: function() {
    startStation = prompt("Enter start station:");
    return startStation;
  },
  endLine: function() {
    endLine = prompt("Enter end line:");
    return endLine;
  },
  endStation: function() {
    endStation = prompt("Enter end station:");
    return endStation;
  },
  distanceToPark: function(startLine, startStation) {
    firstLeg = Math.abs(this[startLine].indexOf(startStation) - this[startLine].indexOf("Park St"));
    return firstLeg;
  },
  distanceFromPark: function(endLine, endStation) {
    secondLeg = Math.abs(this[endLine].indexOf(endStation) - this[endLine].indexOf("Park St"));
    return secondLeg;
  }

}


var startLine, startStation, n1, n2, n;
startLine = MBTA.startLine();
startStation = MBTA.startStation();
endLine = MBTA.endLine();
endStation = MBTA.endStation();
n1 = MBTA.distanceToPark(startLine, startStation);
n2 = MBTA.distanceFromPark(endLine, endStation);
n = (n1 + n2).toString();
console.log(n1);
console.log(n2);
console.log("total trip: " + n);



