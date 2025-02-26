function findMinSum(nums){
    const n = nums.length;
    let curr_sum = 0;
    let max_sum = curr_sum;
    for(let i =0;i<n;i++){
        curr_sum+=nums[i];
        max_sum = Math.min(curr_sum,max_sum);
        if(curr_sum>0){
            curr_sum = 0;
        }
    }
    return max_sum;
}

var maxAbsoluteSum = function(nums) {
    const n = nums.length;
    let current_sum = 0;
    let max_Sum = current_sum;
    for(let i=0;i<n;i++){
        current_sum +=nums[i];
       
        max_Sum = Math.max(current_sum,max_Sum);
        if(current_sum<0){
            current_sum = 0
        }
    }
    const negativeSum = findMinSum(nums);
    return Math.max(max_Sum,Math.abs(negativeSum));
};

console.log(maxAbsoluteSum([2,-5,1,-4,3,-2]))
console.log(maxAbsoluteSum([1,-3,2,3,-4]))