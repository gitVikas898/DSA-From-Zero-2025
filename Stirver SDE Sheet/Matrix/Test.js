function count1s(arr){
    const n = arr.length;
    let low = 0;
    let high = n-1;
    let firstIndex = -1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid]===1){
            firstIndex = mid;
            high = mid-1;
        }else{
            low=mid+1;
        }
    }

    return firstIndex === -1 ? 0 : n-firstIndex;
}

// console.log(count1s([0,0,1,1,1,1]));

