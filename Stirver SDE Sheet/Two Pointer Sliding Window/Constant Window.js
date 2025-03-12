/**
 * Array = [-1,2,3,4,5,6-1]   k = 4
Find the max sum picking k element consecutively 
*/

function constantWindow(arr,k){
    const n = arr.length;

    let l = 0;
    let r = k-1;
    let sum  = 0;
    
    for(let i = 0;i<=r;i++){
        sum +=arr[i];
    }
    console.log(sum)

    let maxSum = sum;
    while(r<n-1){
        sum = sum - arr[l];
        l++;
        r++;
        sum = sum+arr[r];
        maxSum = Math.max(sum,maxSum);
    }
    return maxSum;
}

console.log(constantWindow([-1,2,3,4,5,-1],4))