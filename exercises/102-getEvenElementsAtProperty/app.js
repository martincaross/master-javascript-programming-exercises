function getEvenElementsAtProperty(obj, key) {
  // your code here
  if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
    return []
}

let arr = obj[key]
let newArray = []

arr.forEach(element => {
    if (element % 2 == 0){
        newArray.push(element)
    }
});
return newArray
  
}

let obj = {
key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
