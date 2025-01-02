var maximumSubarraySum = function(nums, k) {
    let set = new Set();
    let currentSum = 0;
    let maxSum = 0;
    let start = 0;

    
    for(let end = 0;end<nums.length;end++){

        //duplicate removal

        while(set.has(nums[end])){
            set.delete(nums[start]);
            currentSum -=nums[start];
            start++;
        }


        set.add(nums[end]);
        currentSum +=nums[end];

        if(end-start+1 === k){
            maxSum = Math.max(currentSum,maxSum);
            set.delete(nums[start]);
            currentSum -= nums[start];
            start++;
        }
    }
    return maxSum;
};
let nums , k;

nums = [1,5,4,2,9,9,9], k = 3

console.log("Test#1 results",maximumSubarraySum(nums,k));


nums = [4,4,4], k = 3

console.log("Test#2 results",maximumSubarraySum(nums,k));
