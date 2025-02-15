var sumOfGoodNumbers = function(nums, k) {
    let goodSum = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        let isGood = true;

        if(i-k>=0){
            if(nums[i]<=nums[i-k]){
                isGood =false;
            }
        }

        if (i + k < n) {
            if(nums[i]<nums[i+k]){
                isGood = false;
            }
        }

        if (isGood) {
            goodSum += nums[i];
        }
    }

    return goodSum;
};

console.log(sumOfGoodNumbers([1,3,2,1,5,4],2)); // Expected output: ?
console.log(sumOfGoodNumbers([2,1],1)); // Expected output: ?
