function squareRoot(n){
    let low = 1;
    let high = n-1;
    let res = 1
    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(mid*mid<=n){
            res = mid;
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return res
}

console.log(squareRoot(1))