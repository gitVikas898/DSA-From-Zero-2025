// given an array [1,1,0,1,1,1]; find the max consecutive ones 
function findConsecutive(arr){
    const n = arr.length;
    let currentCount = 0;
    let maxCount = currentCount;

    for(let i=0;i<n;i++){
        if(arr[i]=== 1){
            currentCount++;
            maxCount = Math.max(currentCount,maxCount);
        }else{
            currentCount = 0;
        }
    }
    return maxCount;
}
console.log(findConsecutive([1,1,0,1,1,1]));
console.log(findConsecutive([1,0,1,1,0,1]))

