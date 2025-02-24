// Write your function here
function countAllCharacters(str) {

    let obj = {}
    let array = str.split("")

    if(str.length == 0){
        return {}
    }

    array.forEach(element => {
        if (obj[element]){
            obj[element]+= 1
        } else{
            obj[element] = 1
        }
    });


    return obj
}


let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}