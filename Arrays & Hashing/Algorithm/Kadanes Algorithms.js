function maxSumSubArray(arr){
    let n = arr.length;
    let currSum = 0;
    let maxSum = -Infinity;

    for(let i = 1;i<n;i++){
        currSum += arr[i]
        maxSum = Math.max(currSum,maxSum);

        if(currSum <0) currSum =0;  // if all integers are negative then my code must return the negative sum not zero;
    }
    return maxSum;
}

console.log(maxSumSubArray([3,-4,5,4,-1,7,-8]));