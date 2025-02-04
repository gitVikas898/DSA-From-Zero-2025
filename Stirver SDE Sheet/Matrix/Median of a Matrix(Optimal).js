function upperBound(arr,target){
    const n = arr.length;

    let low = 0;
    let high = n;

    while(low<high){
        let mid = Math.floor((low+high)/2);

        if(arr[mid]>target){
            high=mid;
        }else {
            low = mid+1;
        }
    }
    return low;
}

function countSmaller(mat,mid){
    const n = mat.length;
    let count = 0
    for(let i = 0;i<n;i++){

       count+=upperBound(mat[i],mid);

    }
    return count;
}

function findMedian(mat){
    const n = mat.length;
    const m = mat[0].length;
    let low = Number.MAX_SAFE_INTEGER, high = Number.MIN_SAFE_INTEGER;

    // point low and high to the right elements:
    for (let i = 0; i < m; i++) {
        low = Math.min(low, mat[i][0]);
        high = Math.max(high, mat[i][n - 1]);
    }

    let required = Math.floor((n * m) / 2); 

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        let numOfSmaller = countSmaller(mat,mid);



        if(numOfSmaller <= required){
            low = mid+1
        }else{
            high = mid-1;
        }
    }
    return low;
}

console.log(findMedian([[1, 3, 5], [2, 6, 9], [3, 6, 9]]))
console.log(findMedian([[62,74 ,89],[0 ,7 ,35],[11 ,57 ,76]]))


