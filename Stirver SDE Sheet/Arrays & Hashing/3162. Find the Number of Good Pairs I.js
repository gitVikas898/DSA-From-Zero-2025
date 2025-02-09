var numberOfPairs = function(nums1, nums2, k) {
    const n = nums1.length;
    const m = nums2.length;
    let goodPairs = 0;

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(nums1[i] % (nums2[j]*k)===0){
                goodPairs++;
            }
        }
    }
    return goodPairs;
};

console.log(numberOfPairs([1,3,4],[1,3,4],1));
console.log(numberOfPairs([1,2,4,12],[2,4],3));