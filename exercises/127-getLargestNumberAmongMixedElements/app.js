function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if(!arr || arr.length == 0 || !Array.isArray(arr)){
        return 0
    }
    
    let aux = 0; // '9999999999999999999'
    for (let e of arr) {
        if (typeof e === 'number' && (aux ===0 || e > aux)){
            aux = e;
        }
         
    }
    return aux;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
