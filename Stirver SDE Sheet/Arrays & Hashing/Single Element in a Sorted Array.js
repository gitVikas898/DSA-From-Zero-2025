function findSingle(arr){
    const n = arr.length;

    if(n===1){
        return arr[0];
    }else if(arr[0]!==arr[1]){
        return arr[0];
    }else if(arr[n-1]!==arr[n-2]){
        return arr[n-1]
    }

    let low = 1;
    let high = n-2;
    while(low<high){
        let mid = Math.floor((low+high)/2);

        if(arr[mid] !== arr[mid-1] && arr[mid] !== arr[mid+1]){
            return arr[mid];
        }

        if((mid%2===1 && arr[mid] === arr[mid-1]) || (mid%2===0 && arr[mid] ===arr[mi+1])){
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return -1
}
console.log(findSingle([3,3,7,7,10,11,11]));