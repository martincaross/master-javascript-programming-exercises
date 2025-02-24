// function flipEveryNChars(input, n) {
//     // your code here
    
//     let array = input.split('')
//     let resto = array.length % n // otro bucle con un if porque si resto es 0 pues nada, donde añada al final lo que queda sin invertir
//     let result = []
//     for (let i = 0; i < array.length/n; i = i + n){
//         for (let j = 0; j < n; j++){
//             aux = array[(array.length/n)-i-j]
//             array2.push(aux)
//         }
//         result.push(array2)
//     }
//     if (resto != 0){
//         for (let i = array.length/n; i < array.length/n; i = i + n){
//             for (let j = 0; j < resto; j++){
//                 aux = array[(array.length/n)-i-j]
//                 array2.push(aux)
//             }
//             result.push(array2)
//         }
//     } else {
//         return result.join('')
//     }
    
// }

function flipEveryNChars(input, n) {
    // your code here
    let reges = `(.{${n}})`;
    let parsed = new RegExp(reges);
  
    let result = input
      .split(parsed)
      .map((e) => e.split('').reverse().join(''))
      .join('');
    return result;
  }

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
