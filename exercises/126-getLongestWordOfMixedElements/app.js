function getLongestWordOfMixedElements(arr) {
    // your code here
    if(!arr || arr.length == 0 || !Array.isArray(arr)){
        return ''
    }

    let aux = ''; // '9999999999999999999'
    for (let e of arr) {
        if (typeof e === 'string' && (aux ==='' || e.length > aux.length)){
            aux = e;
        }
         
    }
    return aux;
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'

