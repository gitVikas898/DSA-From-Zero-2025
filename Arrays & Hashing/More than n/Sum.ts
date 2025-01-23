function sumArray(arr:number[]):number{
    let sum = 0; const n = arr.length;

    for(let i =0;i<n;i++){
        sum +=arr[i];
    }
    return sum;
}