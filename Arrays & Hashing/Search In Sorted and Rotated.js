function searchInSortedRotated(arr){
    const n = arr.length;
    let low = 0;
    let high = n-1;
    let ans = Infinity;
    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if (arr[low] <= arr[high]) {
            ans = Math.min(ans, arr[low]);
            break;
        }

        if(arr[low]<=arr[mid]){
            ans = Math.min(arr[low],ans);
            low = mid+1;
        }else {
            ans = Math.min(ans,arr[mid]);
            high = mid-1;
        }
    }

    return ans
}

console.log(searchInSortedRotated([3,4,5,1,2]));
console.log(searchInSortedRotated([1]));
console.log(searchInSortedRotated([2,1]));