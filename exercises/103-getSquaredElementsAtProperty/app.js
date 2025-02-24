function getSquaredElementsAtProperty(obj, key) {
  // your code here
  if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
    return []
}

let arr = obj[key]
let newArray = []

arr.forEach(element => {
        newArray.push(Math.pow(element,2))
});
return newArray

// return obj[key].map(e => e * e);
  
}

let obj = {
key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
