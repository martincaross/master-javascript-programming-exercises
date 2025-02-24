function getEvenLengthWordsAtProperty(obj, key) {
  // your code here
  if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
    return []
}

let arr = obj[key]
let newArray = []

arr.forEach(element => {
    if (element.length % 2 == 0){
        newArray.push(element)
    }
});
return newArray
  
}

let obj = {
key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
