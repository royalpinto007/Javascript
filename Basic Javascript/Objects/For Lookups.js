/*
Objects can be thought of as a key/value storage, like a dictionary. 
We can use an object to lookup values rather than a switch statement or an if/else chain. 

// simple reverse alphabet lookup
const alpha = 
{
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};

const thirdLetter = alpha[2];
const lastLetter = alpha[24];

const value = 2;
const valueLookup = alpha[value];

// thirdLetter is the string Y, lastLetter is the string C, and valueLookup is the string Y.
*/
