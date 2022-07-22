// dot notation

const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;

// Bracket Notation

const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];

// with variables

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);                     // Doberman

// dynamically allocated

const someObj = {
  propName: "John"
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);

// someProp would have a value of the string propName, and the string John would be displayed in the console.
// Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.

//Problem
// Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.

var testObj = 
{
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber = 16;       
var player = testObj[playerNumber]; 
