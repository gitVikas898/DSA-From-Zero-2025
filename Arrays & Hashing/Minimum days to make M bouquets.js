function possible(arr,m,k,day){
    let count = 0;
    let noOfBoq = 0;
    const n = arr.length;
    for(let i=0;i<n;i++){
        if(arr[i]<=day){
            count++;
        }else{
            noOfBoq+=Math.floor(count/k);
            count=0;
        }

    }

        noOfBoq+=Math.floor(count/k);

        if(noOfBoq>=m) return true;
        else return false;
}

function findMin(arr){
    const n = arr.length
    let min = Infinity;
    for(let i=0;i<n;i++){
        min = Math.min(min,arr[i]);
    }
    return min;
}
function findMax(arr){
    const n = arr.length
    let max = -Infinity;
    for(let i=0;i<n;i++){
        max = Math.max(max,arr[i]);
    }
    return max;
}
var minDays = function(bloomDay, m, k) {

    const n = bloomDay.length;
    if(n<m*k){
        return -1;
    }

    let low = findMin(bloomDay);
    let high = findMax(bloomDay);
    let ans = -1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(possible(bloomDay,m,k,mid)){
            ans = mid;
            high = mid-1;
        }else{
            low = mid+1;
        }
        
    }
    return ans;
};

console.log(minDays([7,7,7,7,12,7,7],2,3))