function getProductOfAllElementsAtProperty(obj, key) {
  // your code here
  if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
    return 0
  }
  
  let array = obj[key]
  let multi = obj[key][0]
  for (let i = 0; i < array.length ; i++){
    multi = multi*array[i]

  }

    return multi

}

let obj = {
key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
