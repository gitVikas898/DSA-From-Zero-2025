function findPeak(nums){

    let length = nums.length;

    if(length===1) return true;
    if(nums[0]>=nums[1])return true;
    if(nums[length-1] >= nums[length-2]) return true;

    for(let i=1;i<length-1;i++){
        if(nums[i]>=nums[i-1] && nums[i]>= nums[i+1]){
            return true
        }
    }
    return false;
}