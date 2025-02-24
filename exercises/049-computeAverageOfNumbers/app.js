// Write your function here

function computeAverageOfNumbers(arr) {
    let sum = 0
    for (let i = 0; i < arr.length ; i++){
        sum = arr[i] + sum
    }
    if (arr.length === 0){
        return 0
    } else {
        return result = sum/arr.length
    }
    

}
let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3