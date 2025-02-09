var numberOfPairs = function(nums1, nums2, k){
    const n = nums1.length;
    const m = nums2.length;

    let freqMap = new Map();

    for(let value of nums2){
        freqMap.set(value,(freqMap.get(value) || 0) + 1)
    }

    let goodPairs = 0;

    for(let i=0;i<n;i++){
        let target = nums1[i]/k;

        if(!Number.isInteger(target)) continue;

        const divisors = getDivisors(target);

        for(const divisor of divisors){
            if(freqMap.has(divisor)){
                goodPairs+=freqMap.get(divisor)
            }
        }
    }
    return goodPairs;
}

function getDivisors(num){
    let divisors = new Set();
    for(let i=1;i<=Math.sqrt(num);i++){
        if(num%i === 0){
            divisors.add(i);
            divisors.add(num/i);
        }
    }
    return divisors;
}

console.log(numberOfPairs([1,3,4],[1,3,4],1));
console.log(numberOfPairs([1,2,4,12],[2,4],3));