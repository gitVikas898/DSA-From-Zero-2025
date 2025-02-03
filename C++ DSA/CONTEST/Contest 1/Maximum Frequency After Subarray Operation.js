function maxFrequencyAfterOperation(nums, k) {
    const n = nums.length;
    let maxFrequency = 0;

   
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
           
            const x = k - nums[i]; 
            let frequency = 0;

           
            const modified = [...nums];
            for (let m = i; m <= j; m++) {
                modified[m] += x;
            }

           
            for (let num of modified) {
                if (num === k) frequency++;
            }

           
            maxFrequency = Math.max(maxFrequency, frequency);
        }
    }

    return maxFrequency;
}

console.log(maxFrequencyAfterOperation([1,2,3,4,5,6],1))
console.log(maxFrequencyAfterOperation([10,2,3,4,5,5,4,3,2,2],10))
//console.log(maxFreq([1,2,3,4,5,6],1))