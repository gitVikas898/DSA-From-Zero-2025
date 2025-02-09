var numberOfPairs = function(nums1, nums2, k) {
    const n = nums1.length;
    const m = nums2.length;

    // Create a frequency map for nums2
    const freqMap = new Map();
    for (const num of nums2) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    let goodPairs = 0;

    // Iterate through nums1
    for (let i = 0; i < n; i++) {
        const target = nums1[i] / k; // nums1[i] must be divisible by nums2[j] * k
        if (!Number.isInteger(target)) continue; // Skip if target is not an integer

        // Find all divisors of target
        const divisors = getDivisors(target);

        // Check if any divisor exists in nums2
        for (const divisor of divisors) {
            if (freqMap.has(divisor)) {
                goodPairs += freqMap.get(divisor);
            }
        }
    }

    return goodPairs;
};

// Helper function to get all divisors of a number
function getDivisors(num) {
    const divisors = new Set();
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            divisors.add(i);
            divisors.add(num / i);
        }
    }
    return divisors;
}

console.log(numberOfPairs([1,3,4],[1,3,4],1));
console.log(numberOfPairs([1,2,4,12],[2,4],3));