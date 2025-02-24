function removeOddValues(obj) {
  // your code here
  for (const property in obj){
    if (obj[property] % 2 != 0){
      delete obj[property]
    }
      
  }
  return obj

}

let obj = {
a: 2,
b: 3,
c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
