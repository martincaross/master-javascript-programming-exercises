function getStringLength(string) {
    // your code here
    let largo = 0
    arr = string.split('')
    for(let e of arr){
        if (e != undefined){
            largo++
        }
    }
    return largo
    
}

let output = getStringLength('hello');
console.log(output); // --> 5
