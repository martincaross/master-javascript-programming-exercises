function getOddElementsAtProperty(obj, key) {
  // your code here
  if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
    return []
}

let arr = obj[key]
let newArray = []

arr.forEach(element => {
    if (element % 2 != 0){
        newArray.push(element)
    }
});
return newArray
  
}

let obj = {
key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
