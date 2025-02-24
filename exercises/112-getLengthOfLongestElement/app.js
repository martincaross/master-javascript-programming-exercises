function getLengthOfLongestElement(arr) {
    // Your code here
    if(!arr || arr.length == 0 || !Array.isArray(arr)){
        return 0
    }
    let aux = 0
    for (let i = 0; i < arr.length; i++){
        
        if (aux < arr[i].length){
            aux = arr[i].length
        }

    }

    return aux
    
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
