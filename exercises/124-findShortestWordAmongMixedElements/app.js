function findShortestWordAmongMixedElements(arr) {
    // your code here
    if(!arr || arr.length == 0 || !Array.isArray(arr)){
        return ''
    }

    let aux = ''; // '9999999999999999999'
    for (let e of arr) {
        if (typeof e === 'string' && (aux ==='' || e.length < aux.length)){
            aux = e;
        }
         
    }
    return aux;
    
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
