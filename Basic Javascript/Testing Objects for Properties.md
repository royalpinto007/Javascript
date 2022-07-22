// Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). 
// If the property is found, return that property's value. If not, return "Not Found".

// Before
function checkObj(obj, checkProp) 
{
  // Only change code below this line
  return "Change Me!";
  // Only change code above this line
}

// After
function checkObj(obj, checkProp) 
{
  var myObj = 
  {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh",
    city: "Seattle"
  };

  return (obj.hasOwnProperty(checkProp)) ? myObj[checkProp] : "Not Found";
}
