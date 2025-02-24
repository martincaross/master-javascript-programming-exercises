// Write your function here
function keep(arr,elemento){
    return arr.filter(element => element === elemento)
}

let output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); // --> [2, 2]