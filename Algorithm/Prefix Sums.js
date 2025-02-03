function findPrefixSum(arr,start,end){
    let n = arr.length;

    let prefix = [];
    prefix[0] = arr[0];

    for(let i = 1;i<n;i++){
        prefix[i] = prefix[i-1]+arr[i];
    }
    if(start === 0) return prefix[end];

    return prefix[end]-prefix[start-1];
}