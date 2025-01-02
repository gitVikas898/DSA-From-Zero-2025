function remove(val,nums){



    for(let i =0;i<nums.length;i++){
        if(nums[i] === val){
            nums[i] = null;
        }
    }

    return nums.filter(num=>num!== null);
}

console.log(remove(3,[3,2,2,3]))
console.log(remove(2,[0,1,2,2,3,0,4,2]))