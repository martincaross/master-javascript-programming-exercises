function isOldEnoughToDrink(age) {
    // your code here
    if (age >= 21){
        Enough = true
    } else {
        Enough = false
    }
    return Enough
    
}

let output = isOldEnoughToDrink(22);
console.log(output); // --> true
