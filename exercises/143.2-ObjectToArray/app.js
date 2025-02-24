function listAllValues(obj) {
  // your code here
  let array = [];
  for (let e in obj) {
    array.push(obj[e])
    
  }
  return array;
}

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
