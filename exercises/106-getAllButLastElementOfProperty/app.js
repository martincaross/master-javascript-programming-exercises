function getAllButLastElementOfProperty(obj, key) {
  // your code here
  if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
    return []
}

let arr = obj[key]
let AnArray = []
for (let i = 0; i < arr.length-1 ; i++){
AnArray.push(arr[i])
}

return AnArray


}

let obj = {
key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
