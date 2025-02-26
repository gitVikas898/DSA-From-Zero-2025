// find the Maximum (Minimum Sum in sub array)
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
console.log(findMinSum([2,-5,1,-4,3,-2]))