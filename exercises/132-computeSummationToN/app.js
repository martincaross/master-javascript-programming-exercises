function computeSummationToN(n) {
  // your code here
  let suma  = 0
  if (n == 0){
      return 0
  } else {
      
      for (let i = 0; i <= n ; i++){
          suma = (i) + suma
      }
  } return suma
}

let output = computeSummationToN(6);
console.log(output); // --> 21
