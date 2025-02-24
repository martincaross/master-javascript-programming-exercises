function isOldEnoughToVote(age) {
  // your code here
  if (age >= 18){
      Enough = true
  } else {
      Enough = false
  }
  return Enough
  
}

let output = isOldEnoughToVote(22);
console.log(output); // --> true