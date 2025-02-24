function findSmallestElement(arr) {
    // your code here
    if(!arr || arr.length == 0 || !Array.isArray(arr)){
        return 0
    }
    let aux = arr[0]
    for (let e of arr) {
        if (e < aux) aux = e;
      }

    return aux

}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1