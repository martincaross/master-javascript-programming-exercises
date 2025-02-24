function getAllKeys(obj) {
  // your code here
  let array = [];
  for (let e in obj) {
    array.push(e)
    
  }
  return array;
  
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
