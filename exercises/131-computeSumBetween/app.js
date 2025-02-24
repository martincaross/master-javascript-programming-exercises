function computeSumBetween(num1, num2) {
    // your code here
    let suma  = 0
    if (num1 > num2){
        return 0
    } else {
        
        for (let i = 0; i < (num2-num1) ; i++){
            suma = (num1+i) + suma
        }
    } return suma
}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9