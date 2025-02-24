function computeProductOfAllElements(arr) {
  // your code here
  if(!arr || arr.length == 0 || !Array.isArray(arr)){
    return 0
  } 

  let multi = 1
    for (let i = 0; i < arr.length ; i++){
      multi = multi*arr[i]

    }

      return multi
  
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60