function find(arr,target){
    const n = arr.length;
    let low = 0;
    let high = n-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(arr[mid]===target){
            return mid;
        }
        else if(arr[mid]>target){
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    return -1;
}

console.log(find([10,11,12,13,14],14))