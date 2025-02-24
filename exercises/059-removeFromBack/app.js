function removeFromBack(arr) {
    // your code here
     arr.pop(arr.length)
    return arr
    
}

let output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]
