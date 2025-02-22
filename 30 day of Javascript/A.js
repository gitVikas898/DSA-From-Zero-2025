const arr = [1,2,3,4,5,6];

const sum = arr.reduce((curr,acc)=>curr+acc,10);
console.log(sum);

var reduce = function(nums, fn, init) {
        let res = init;

        for(let i=0;i<nums.length;i++){
            res = fn(res,arr[i]);
        }

        return res;
};