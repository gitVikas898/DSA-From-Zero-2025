function floorArray(arr,k){
    const n = arr.length;

    let left = 0;
    let right = n-1;
    let floorIndex =-1;

    while(left<right){
        let mid = Math.floor((left+right)/2);

        if(arr[mid]<=k){
            floorIndex = mid;
            left=mid+1;
        }
        else {
            right = mid-1;
        };
    }
    return floorIndex;
}

console.log(floorArray([1, 2, 8],1))
console.log(floorArray([20935, 23959, 24498, 24954,24940],24940))
console.log(floorArray([10143, 29122,30010],23112))