function findIncreasing(arr){
    const n = arr.length;

    let currentInc = 1;
    let currentDec = 1;

    let maxInc = currentInc;
    let maxDec = currentDec;

    for(let i=1;i<n;i++){
        if(arr[i]>arr[i-1]){
            currentInc++;
            maxInc = Math.max(currentInc,maxInc);
            currentDec = 1
        }else if(arr[i]<arr[i-1]){
            currentDec++;
            maxDec = Math.max(currentDec,maxDec);
            currentInc=1;
        }else{
            currentDec=1;
            currentInc=1
        }
    }

    return Math.max(maxDec,maxInc);
}

console.log(findIncreasing([1,4,3,3,2]))
console.log(findIncreasing([3,3,3,3]))
console.log(findIncreasing([1,5,2,7]))
// console.log(findIncreasing([5,8,10,9,8]))
// console.log(findIncreasing([24,47,24,23,14,6,9,2,3,19]))