function reverseInGroups(nums,k){

    let n = nums.length;

    for(let i = 0;i<n;i=i+k){

        let left = i;
        let right = Math.min(i+k-1,n-1);

        while(left<right){
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp
            left++;
            right--;
        }
    }
    return nums;

}

console.log("Test1",reverseInGroups([1,2,3,4,5],6));