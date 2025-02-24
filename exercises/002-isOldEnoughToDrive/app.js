function isOldEnoughToDrive(age) {
  // your code here
  if (age >= 16){
      Enough = true
  } else {
      Enough = false
  }
  return Enough
  
}

let output = isOldEnoughToDrive(22);
console.log(output); // --> true