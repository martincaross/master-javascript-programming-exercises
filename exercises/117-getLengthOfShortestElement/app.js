function getLengthOfShortestElement(arr) {
    // your code here
    if(!arr || arr.length == 0 || !Array.isArray(arr)){
        return 0
    }
    let aux = arr[0].length
    for (let i = 0; i < arr.length; i++){
        
        if (aux > arr[i].length){
            aux = arr[i].length
        }

    }

    return aux
    
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3