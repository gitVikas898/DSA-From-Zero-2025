function findMaxSumSubArray(nums,k){
    let currentSum = 0;
    let maxSum = 0;

    for(let i=0;i<k;i++){
        currentSum +=nums[i];
    }

    maxSum = currentSum;

    for(let i=k;i<nums.length;i++){
        currentSum = currentSum+nums[i]-nums[i-k]; // window logic
        maxSum = Math.max(currentSum,maxSum);
    }
    return maxSum;
}

console.log(findMaxSumSubArray([4,4,4],3));
