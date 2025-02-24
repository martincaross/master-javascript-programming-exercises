// Write your function here
function getIndexOf (caracter,str) {
    
    for(let i = 0; i < str.length ; i++){
        if(str[i] === caracter){
            return i    
        }
    }
    return -1

    


}

let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2