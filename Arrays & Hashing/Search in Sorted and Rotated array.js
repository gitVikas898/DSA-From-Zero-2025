function search(arr,target){
    const n = arr.length;
    let left = 0;
    let right = n-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2)

        if(arr[mid] === target){
            return mid;
        }

        if(arr[left]<=arr[mid]){
            if(arr[left]<=target && target <=arr[mid]){
                right = mid-1;
            }else{
                left = mid+1;
            }
        }else{
            if(arr[mid]<=target && target<=arr[right]){
                left = mid+1;
            }else{
                right = mid-1;
            }
        }       
    }

    return -1;

}

console.log(search([4,5,6,7,0,1,2],0))
console.log(search([4,5,6,7,0,1,2],3))