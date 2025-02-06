function tupleSameProduct(nums) {
    let productMap = new Map();
    let count = 0;
    
    let n = nums.length;
    
    // Iterate through all pairs (i, j) where i < j
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let product = nums[i] * nums[j];
            
            // If this product exists in map, add 8 times its count to the result
            if (productMap.has(product)) {
                count += 8 * productMap.get(product);
            }
            
            // Store this product occurrence
            productMap.set(product, (productMap.get(product) || 0) + 1);
        }
    }
    
    return count;
}

console.log(tupleSameProduct([1,2,4,5,10]))