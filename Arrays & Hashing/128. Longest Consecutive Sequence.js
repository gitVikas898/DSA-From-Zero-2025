function count(arr){
    const n = arr.length;
    if(n === 0) return 0;

    arr.sort((a,b)=>a-b);
    let lastSmaller = -Infinity;
    let count = 0;
    let maxLen = 1;

    for(let i =0;i<n;i++){
        if(arr[i]-1===lastSmaller){
            count++;
            lastSmaller = arr[i]
        }else if(arr[i]!== lastSmaller){
            count = 1;
            lastSmaller = arr[i];
        }

        maxLen = Math.max(count,maxLen);
    }
    return maxLen;
}

console.log(count([0,3,7,2,5,8,4,6,0,1]))
console.log(count([100,4,200,1,3,2]))