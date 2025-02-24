function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    propina = preTaxAndTipAmount*0.15 
    ventas = preTaxAndTipAmount*0.095 
    return post = propina + ventas +preTaxAndTipAmount
    
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
