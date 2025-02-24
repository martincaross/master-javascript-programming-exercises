function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if(!arr || arr.length == 0 || !Array.isArray(arr)){
    return 0
}

let aux = 0; // '9999999999999999999'
for (let e of arr) {
    if (typeof e === 'number' && (aux ===0 || e < aux)){
        aux = e;
    }
     
}
return aux;
  
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
