function findMaxLen(arr){
    let n = arr.length;
    if(n <= 1) return 0;
    let map = new Map();
    let res = 0;
    let preSum =0;

    for(let i=0;i<n;i++){
        if(arr[i] === 0){
            arr[i] = -1;
        }
    }

    for(let i=0;i<n;i++ ){
        preSum+=arr[i];

        if(preSum === 0){
            res = i+1;
        }

        if(map.has(preSum)){
            res = Math.max(res,i-map.get(preSum))
        }else{
            map.set(preSum,i);
        }
    }
    return res;
}

console.log(findMaxLen([1, 0, 1, 1, 1, 0, 0]));
console.log(findMaxLen( [0, 0, 1, 1, 0]));
console.log(findMaxLen([0]));
console.log(findMaxLen([0,1,0,1]))