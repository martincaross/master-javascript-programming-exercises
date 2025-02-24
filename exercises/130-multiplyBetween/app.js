function multiplyBetween(num1, num2) {
    // your code here
    let mult  = 1
    if (num1 > num2){
        return 0
    } else {
        
        for (let i = 0; i < (num2-num1) ; i++){
            mult = (num1+i) * mult
        }
    } return mult

}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
