function countPartitions(arr) {
    const n = arr.length;
    let count = 0;
    let lsum = 0;
    for (let i = 0; i < n-1; i++) {
        let rsum = 0
        lsum +=arr[i];
        for (let j = i + 1; j <= n-1; j++) {
            rsum += arr[j];
        }

        if ((lsum-rsum) % 2 === 0) {
            count++;
        }
    }

    return count;
}

console.log(countPartitions([10,10,3,7,6])) //4
console.log(countPartitions([2,4,6,8]))//3
console.log(countPartitions([1,2,2]))//0
console.log(countPartitions([1,1]))