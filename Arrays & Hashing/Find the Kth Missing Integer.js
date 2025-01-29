// Naive Solution to find the Kth missing integer in a given array which is sorted in strictly increasing order;

function findMissing(nums,k){
    const n = nums.length;

    for(let i=0;i<n;i++){
        if(nums[i]<=k) k++;
        else break
    }
    return k ;
}

console.log(findMissing([2,3,4,7,11],4));

// how to optimise the complexity O(N);

// Using Binary Search we will eliminate halves 
// missing number till arr[i] = arr[i]-(i+1);


var findKthPositive = function(arr, k) {
    let low = 0;
    let high = arr.length-1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        let missing_number = arr[mid] - (mid+1);
        if(missing_number<k){
            low=mid+1;
        }else{
            high = mid-1;
        }
    }
    return k+high+1;
};
console.log(findKthPositive([2,3,4,7,11],5));