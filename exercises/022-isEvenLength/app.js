// Write your function here
function isEvenLength (word1){
    if (word1.length % 2 === 0){
        return true
      } else {
        return false
      }
}
let output = isEvenLength('wow');
console.log(output); // --> false