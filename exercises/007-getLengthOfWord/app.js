function getLengthOfWord(word) {
  // your code here
  let count = 0
  for (let i = 0; i < word.length ; i++)
    if (word[i] != " "){
      count++
    }
    return count

  
}

let output = getLengthOfWord('some');
console.log(output); // --> 4

//Era tan facil como poner word.length