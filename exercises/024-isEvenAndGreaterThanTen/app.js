// Write your function here
function isEvenAndGreaterThanTen (num1){
    if (num1 % 2 === 0 && num1 > 10){
        return true
      } else {
        return false
      }
}
let output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false