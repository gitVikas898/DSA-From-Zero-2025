function productArray(arr){
    let n = arr.length
    let res = new Array(n).fill(0);  // by default in case the array input has more than 1 zero 

    let zeros = 0;
    let product =1;
    let idx=-1;

    for(let i=0;i<n;i++){
        if(arr[i]===0){
            zeros++
            idx = i
        }else{
            product*=arr[i];
        }
    }

    if(zeros ===0){
        for(let i=0;i<n;i++){
            res[i] = Math.floor(product/arr[i]);
        }
    }

    else if(zeros === 1){
        res[idx] = product
    }

    return res;
}

console.log(productArray([10, 3, 5, 6, 2]) )
console.log(productArray([12, 0]))