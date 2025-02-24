function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let longitud = Math.max(word1.length,word2.length,word3.length)
    let arr = [word1,word2,word3]

    for (let i in arr){
        if (arr[i].length == longitud){
            return arr[i]
        }
    }
        
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
