// Write your function here
function getElementsGreaterThan10AtProperty(obj,key){
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
        return []
    }

    let arr = obj[key]
    let newArray = []

    arr.forEach(element => {
        if (element > 10){
            newArray.push(element)
        }
    });
    return newArray

}

let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]