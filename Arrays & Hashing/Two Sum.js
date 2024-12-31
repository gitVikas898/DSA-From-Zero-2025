function twoSum(nums,target){

    let hashMap = {};

    let difference;

    for(let i=0;i<nums.length;i++){
        
        difference = target-nums[i];

        if(difference in hashMap){
            return [hashMap[difference],i];
        }else{
            hashMap[nums[i]] = i;
        }
    }
    return -1;
         


}
//Test #1
console.log("Result of Test #1 : ",twoSum([3,4,5,6],7));

//Test #2
console.log("Result of Test #2 : ",twoSum([4,5,6],10));

//Test #3
console.log("Result of Test #3 : ",twoSum([5,5],10));