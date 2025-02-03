/*Find the Longest Subarray with Sum K */

function countSubArray(arr,k){
    const n = arr.length;
    const prefixSumMap = new Map();
    let maxLen = 0;
    let sum = 0;


    for(let i = 0;i<n;i++){
        sum +=arr[i];

        if(sum === k){
            maxLen = Math.max(maxLen, i + 1);
        }

        let rem = sum-k;

        if(prefixSumMap.has(rem)){
            let len = i-prefixSumMap.get(rem);
            maxLen = Math.max(maxLen,len)
        }

        if(!prefixSumMap.has(sum)){
            prefixSumMap.set(sum,i);
        }
        
        console.log(prefixSumMap)
    }
    return maxLen;
}

console.log(countSubArray([2,3,5],5));
console.log(countSubArray([2,3,5,1,9],10));
console.log(countSubArray([10, -10, 20, 30],-5));
console.log(countSubArray([1,2,1,2,1],3));

