function checkAge(name, age) {
  // your code here
  let out = ''
  if (age >= 21){
    out = "Welcome, " + name + "!"

  } else {
    out = "Go home, " + name + "!"
  }
  return out
  
}

let output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'