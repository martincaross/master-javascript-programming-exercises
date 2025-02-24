function computeFactorialOfN(n) {
    // your code here
    let mult  = 1
    if (n < 0){
        return 0
    } else {
        
        for (let i = 1; i <= n ; i++){
            mult = (i) * mult
        }
    } return mult
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
