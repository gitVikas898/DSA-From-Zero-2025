function searchInsert(arr,target){
    const n = arr.length;
    let left = 0;
    let right = n-1;

    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid]===target) return mid;
        else if(arr[mid]>target)right--;
        else left++;
    }
    return left;
}

console.log(searchInsert([1,3,5,6],5))
console.log(searchInsert([1,3,5,6],2))
console.log(searchInsert([1,3,5,6],7))
