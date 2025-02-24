function average(arr) {
  // your code here

  promedio = sum(arr)/arr.length
  return promedio
  
}

function sum(arr) {
  // your code here
  let suma = 0
  for(let i = 0; i < arr.length ; i++){
    suma = suma + arr[i]
  }
  return suma
  
}

console.log(average([1, 2])); // --> 1.5
