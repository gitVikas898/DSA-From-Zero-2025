function findMaxSum(arr){
    const n = arr.length;
    let currentSum = arr[0];
    let maxSum = currentSum;

    for(let i = 1;i<n;i++){
        if(arr[i]>arr[i-1]){
            currentSum +=arr[i];
            maxSum = Math.max(currentSum,maxSum);
        }else{
            currentSum = arr[i];
        }
    }
    return maxSum;
}

console.log(findMaxSum([10,20,30,5,10,50]));
console.log(findMaxSum([10,20,30,40,50]));
console.log(findMaxSum([12,17,15,13,10,11,12]));