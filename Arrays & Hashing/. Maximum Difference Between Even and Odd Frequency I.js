var maxDifference = function(s) {
    let freqMap = new Map();
    let maxOdd = -Infinity;
    let maxEven = -Infinity;
    let minEven = Infinity;
    let minOdd = Infinity;

    let hasOdd = false;
    let hasEven = false;

    for(let char of s){
        freqMap.set(char,(freqMap.get(char) || 0) + 1);
    }

    for(let values of freqMap.values()){
        if(values%2 === 0){
            hasEven = true
            maxEven = Math.max(maxEven,values);
            minEven =Math.min(minEven,values);
        }else{
            hasOdd = true
            minOdd = Math.min(minOdd,values)
            maxOdd = Math.max(maxOdd,values);
        }
    }

    return Math.max((maxOdd-maxEven),(minOdd-minEven));
}

console.log(maxDifference("mmsmsym"))
console.log(maxDifference("aaaaabbc"))
console.log(maxDifference("abcabcab"))
console.log(maxDifference("tzt"))