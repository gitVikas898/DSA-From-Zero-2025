function findMissing(arr){
    let n = arr.length;

    let sumOfN = (n*(n+1))/2;

    let sum =0;

    for(let i = 0;i<n;i++){
        sum = sum+arr[i];
    }

    return sumOfN - sum;


}

console.log(findMissing([0,1]));