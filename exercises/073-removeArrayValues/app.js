function removeArrayValues(obj) {
    // your code here
    for (const property in obj){
        if (Array.isArray(obj[property])){
            delete obj[property]
        }
        
    }
    return obj
    
}
let obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
  }
  removeArrayValues(obj);
  console.log(obj); // --> { b: 2 }


// function removeArrayValues2(obj) {
//     // your code here
//     for (let key in obj){
//         if (typeof obj[key] == 'array'){
//             delete obj[key]
//         }
//     }
//     return obj
    
// }

// removeArrayValues2(obj);
// console.log(obj); // --> { b: 2 }