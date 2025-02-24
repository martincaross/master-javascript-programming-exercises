// Write your function here
function getOddLengthWordsAtProperty(obj,key){
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
        return []
    }

    let arr = obj[key]
    let newArray = []

    arr.forEach(element => {
        if (element.length % 2 != 0){
            newArray.push(element)
        }
    });
    return newArray


}


let obj = {
    key: ['It', 'has', 'some', 'words']
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']