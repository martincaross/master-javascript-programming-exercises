function removeElement(arr,elemento){
    return arr.filter(element => element !== elemento)
}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]