/*
There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

// Dot Notation
Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

const myObj = 
{
  prop1: "val1",
  prop2: "val2"
};
const prop1val = myObj.prop1;
const prop2val = myObj.prop2;

*** prop1val would have a value of the string val1, and prop2val would have a value of the string val2.
_________________________________________________________________________________________________________________

// Bracket Notation
If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

const myObj = 
{
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];

*** myObj["Space Name"] would be the string Kirk, myObj['More Space'] would be the string Spock, and myObj["NoSpace"] would be the string USS Enterprise.

Note that property names with spaces in them must be in quotes (single or double).
_________________________________________________________________________________________________________________

// Bracket Notation (using variables)

Whenever it is stored as the value of a variable, we use this method. 
This can be very useful for iterating through an object's properties or when accessing a lookup table.

const dogs = 
{
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};
const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);

*** The string Doberman would be displayed in the console.
*/
