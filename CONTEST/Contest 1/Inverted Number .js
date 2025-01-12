function numDiffence(n){
    let significantBits =  Math.floor(Math.log2(n)) + 1;

    let mask = (1<<significantBits)-1;

    let invertedNumber = n^mask;

    return n-invertedNumber;
}

console.log(numDiffence(5));