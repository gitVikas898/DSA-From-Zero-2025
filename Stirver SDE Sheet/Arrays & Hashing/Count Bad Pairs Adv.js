var countBadPairs = function(nums) {
    const n = nums.length;

    let diff = [];

    for(let i=0;i<n;i++){
        diff[i] = nums[i]-i;
    }

    let map = new Map();

    for(let d of diff){
        map.set(d,(map.get(d)||0)+1);
    }

    let goodPairs = 0;

    for(const count of map.values()){
        if(count>=2){
            goodPairs = goodPairs + (count*(count-1))/2
        }
    }

    const totalPairs = (n*(n-1))/2;

    return totalPairs-goodPairs;
};


console.log(countBadPairs([4,1,3,3]));
console.log(countBadPairs([1,2,3,4,5]))