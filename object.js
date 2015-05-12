// hash is object, keys are properties, values are values. No symbols.
// key value paris, properties and values

var anna = {name: "Anna",
            age: 28,
            luckyNumber: function() {
              return this.age*2;
            }

            }

anna.name // returns "Anna"
