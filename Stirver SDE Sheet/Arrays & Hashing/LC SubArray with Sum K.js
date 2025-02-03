function findSubArray(arr,k){
    let map = {0:1};
    let currentSum = 0;
    let count =0;
    const n = arr.length;

    for(let i=0;i<n;i++){
        currentSum +=arr[i];

        let requiredSum = currentSum-k;

        if(map[requiredSum]){
            count +=map[requiredSum];
        }

        map[currentSum] = (map[currentSum] || 0) +1;
    }
    return count;
    
}