
function findMax(arr){
    const n = arr.length;
    let max = -Infinity;

    for(let i=0;i<n;i++){
        max=Math.max(arr[i],max);
    }
    return max;
}

function solve(arr,h){
    let totalHours = 0;
    for(let i =0;i<arr.length;i++){
        let y = Math.ceil(arr[i]/h);
        totalHours +=y;
    }
    return totalHours;
}

function minEatingSpeed(piles,h){
    const n  = piles.length;

    let low = 1;
    let high = findMax(piles);

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        let hours = solve(piles,mid);

        if(hours<=h){
            high=mid-1;
        }else{
            low = mid+1;
        }
    }
    return low;

}

console.log(minEatingSpeed([3,6,7,11],8))
console.log(minEatingSpeed([30,11,23,4,20],5))
console.log(minEatingSpeed([30,11,23,4,20],6))