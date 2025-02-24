function flipPairs(input) {
    // your code here
    let array = input.split('')
    let array2 = []
    for (let i = 1; i < array.length; i = i + 2){
        aux = array[i-1]
        aux2 = array[i]
        array2.push(array[i],array[i-1])
    }
    if (array.length % 2 != 0){
        array2.push(array[array.length-1])
    }
    return array2.join('')
    
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
