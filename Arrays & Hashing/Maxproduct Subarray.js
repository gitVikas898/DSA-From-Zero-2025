function findmaxProd(arr){
    const n = arr.length;
    let prefix = 1,suffix = 1;
    let maxprod = -Infinity;

    for(let i=0;i<n;i++){
        if(prefix === 0) prefix = 1;
        if(suffix === 0) suffix = 1;

        prefix = prefix*arr[i];
        suffix = suffix*arr[n-i-1];

        maxprod = Math.max(maxprod,Math.max(prefix,suffix));
    }
    return maxprod;
}

console.log(findmaxProd([2,3,-2,4]))