var mergeAlternately = function(word1, word2) {
    let result = [];
    let left = 0;
    let right = 0;
    while(left < word1.length && right <word2.length){
        result.push(word1[left]);
        left++;
        result.push(word2[right]);
        right++;
    }
    while(left < word1.length){
        result.push(word1[left]);
        left++;
    }
    while(right < word2.length){
        result.push(word2[right]);
        right++;
    }

    return result.join("");
};

console.log(mergeAlternately('abc','pqr'));
console.log(mergeAlternately('abc12','pqr'));

var mergeAlternately1 = function(word1,word2){
    let result = [];
    let minL = Math.min(word1.length,word2.length);
    let maxL = Math.max(word1.length,word2.length);

    const longestWord = word1.length > word2.length ? word1 : word2

    for(let i = 0;i<minL;i++){
        result.push(word1[i],word2[i]);
    }
    for(let i = minL;i <maxL;i++){
        result.push(longestWord[i]);
    }
    return result.join("");
}