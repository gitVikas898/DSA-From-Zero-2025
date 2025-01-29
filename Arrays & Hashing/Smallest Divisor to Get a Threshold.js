
function solve(arr,div){
    const n = arr.length;
    let totalSum = 0;
    for(let i =0;i<n;i++){
        let ceilValue = Math.ceil(arr[i]/div);
        totalSum+=ceilValue;
    }
    return totalSum;
}

function findMax(nums){
    let max = -Infinity;
    const n = nums.length;

    for(let i=0;i<n;i++){
        max = Math.max(max,nums[i]);
    }
    return max;
}

var smallestDivisor = function(nums, t) {
    let low = 1;
    let high = findMax(nums);
    let ans = -1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);

        let result = solve(nums,mid);

        if(result<=t){
            ans = mid;
            high =mid-1;
        }else{
            low = mid+1;
        }
    }
    return ans;
};

console.log(smallestDivisor([1,2,5,9],6))