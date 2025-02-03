
function lowerBound(arr,k){
    let  res = arr.length;
    
    let left = 0; let right = arr.length-1;

    while(left<=right){
        let mid = left + Math.floor((right-left)/2);

        if(arr[mid]>=k){
            res = mid;
            right = mid-1;
        }else{
            left = mid+1;
        }
    }
    return res;
}

function upperBound(arr,k){
    let res = arr.length;
    let left = 0; let right = arr.length-1;
    while(left<=right){
        let mid = left + Math.floor((right-left)/2);
        if(arr[mid]>k){
            res = mid;
            right = mid-1;
        }else{
            left = mid+1;
        }
    }
    return res;
}

function countOccurrences(arr,target){
    return upperBound(arr,target)-lowerBound(arr,target)
}

console.log(countOccurrences([1, 1, 2, 2, 2, 2, 3],2));