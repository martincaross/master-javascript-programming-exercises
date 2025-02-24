function getLongestElement(arr) {
    // your code here
    if(!arr || arr.length == 0 || !Array.isArray(arr)){
        return ''
    }
    let aux = ''
    for (let e of arr) {
        if (e.length > aux.length) aux = e;
      }

    return aux
    
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'