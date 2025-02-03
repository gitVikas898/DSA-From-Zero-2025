function findDays(arr,cap){
    let days = 1;
    let load = 0;
    const n = arr.length;
    for(let i=0;i<n;i++){
        if(load + arr[i]>cap){
            days = days+1;
            load = arr[i]
        }else{
            load +=arr[i]
        }
    }
    return days;
}

function findMax(arr){
    let max = -Infinity;
    
    for(let i =0;i<arr.length;i++){
        max = Math.max(max,arr[i]);
    }
    return max;
}
function findSum(arr){
    const n = arr.length;
    let sum = 0;
    for(let i = 0;i<n;i++){
        sum+=arr[i];
    }
    return sum;
}

var shipWithinDays = function(weights, days) {
    let low  = findMax(weights);
    let high = findSum(weights);
    let ans = -1;
    while(low<=high){
        let mid = Math.floor((low+high)/2);

        let result = findDays(weights,mid);

        if(result<=days){
            ans = mid;
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    return ans;
};

console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10],5));
console.log(shipWithinDays([3,2,2,4,1,4],3));
console.log(shipWithinDays([1,2,3,1,1],4));