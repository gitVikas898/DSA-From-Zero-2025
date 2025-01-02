var maximumSubarraySum = function(nums, k) {
    
    let set = new Set();
    let currentSum = 0;
    let maxSum = 0

    for(let val of nums){
        set.add(val);
    }

    let myArray = [];

    for(let val of set){
        myArray.push(val);
    }

    for(let i =0;i<k;i++){
        currentSum+=myArray[i];
    }

    maxSum = currentSum;

    for(let i=k;i<myArray.length;i++){
        currentSum = currentSum+myArray[i]-myArray[i-k];
        maxSum = Math.max(currentSum,maxSum);
    }

    return maxSum;

};

console.log(maximumSubarraySum([4,4,4],3))