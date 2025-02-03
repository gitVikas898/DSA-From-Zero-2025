// first understand how to find peak in a single array using Binary Search

function findPeak(arr){
    const n = arr.length;
    let low = 0;
    let high = n-1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if((mid === 0 || arr[mid]>arr[mid-1]) && (mid === n-1 || arr[mid] > arr[mid+1])){
            return mid;
        }
        if(mid > 0 && arr[mid]<arr[mid-1]){
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
}

console.log(findPeak([1,2,3,1]));