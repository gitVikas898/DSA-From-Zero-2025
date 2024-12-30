/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set();


    for(let val of nums){
        if(set.has(val)){
            return true
        }
        set.add(val);
    }
    return false;
    
};



//Test 1
console.log(containsDuplicate([1,2,3,1]))


//Test 2
console.log(containsDuplicate([1,2,3,4]))


//Test 3
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));