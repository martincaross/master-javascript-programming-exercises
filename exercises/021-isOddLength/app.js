// Write your function here
function isOddLength (word1){
    if (word1.length % 2 != 0){
        return true
      } else {
        return false
      }
}
let output = isOddLength('special');
console.log(output); // true