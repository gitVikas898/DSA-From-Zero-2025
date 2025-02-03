var subarraySum = function(nums) {

    let n = nums.length;
    let sum = 0;
    

    for(let  i = 0;i<n;i++){
        let start = Math.max(0,i-nums[i]);

        for(let j = start;j<=i;j++){
            sum = sum+nums[j];
        }
    }

    return sum;
}

console.log(subarraySum([2,3,1]));
console.log(subarraySum([3,1,1,2]));