function maxProfit(arr){
    let n = arr.length;
    let maxProfit = 0;
    let min_Price = arr[0];

    for(let i = 1;i<n;i++){
        maxProfit = Math.max(maxProfit,arr[i]-min_Price);
        min_Price = Math.min(min_Price,arr[i]);
    }
    return maxProfit;
}
console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([1,2,3,4,5,6,7]))
console.log(maxProfit([7,6,5,4,3,2,1]))
console.log(maxProfit([2,4,1]))
