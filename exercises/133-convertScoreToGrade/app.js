function convertScoreToGrade(score) {
    // your code here
    let nota = ''
    if (score > 90 && score < 100){
        nota = 'A'
    } else if (score > 80 && score < 89){
        nota = 'B'
    } else if (score > 70 && score < 79){
        nota = 'C'
    } else if (score > 60 && score < 69){
        nota = 'D'
    } else if (score > 0 && score < 59){
        nota = 'F'
    } else nota = 'INVALID SCORE'
    return nota
    
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'