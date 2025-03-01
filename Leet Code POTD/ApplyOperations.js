var applyOperations = function(arr) {
    const n = arr.length;
    for(let i=0;i<n-1;i++){
        if(arr[i]!== 0 && arr[i] === arr[i+1]){
            arr[i] = 2*arr[i];
            arr[i+1] = 0
        }
    }
    let nonZeroIndex = 0;

    for(let i=0;i<n;i++){
        if(arr[i]!==0){
            arr[nonZeroIndex] = arr[i];
            nonZeroIndex++;
        }
    }

    for(i=nonZeroIndex;i<n;i++){
        arr[i] = 0;
    }

    return arr;
};

console.log(applyOperations([1,2,2,1,1,0]));