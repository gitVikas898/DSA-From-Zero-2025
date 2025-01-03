function reverseArray(nums){
    let left = 0;
    let right = nums.length-1;
    let temp =0;

    while(left<right){

        temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;

        left++;
        right--;
    }
    return nums;
}

console.log(reverseArray([1,2,3,4,5]));