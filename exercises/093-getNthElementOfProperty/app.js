// Write your function here
function getNthElementOfProperty (obj, key, nth) {
    for (let i in obj){
        return obj[key][nth]
    }
}


let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2