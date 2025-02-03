function floorTheCeil(arr,k){
    const n = arr.length;
    let f = -1;
    let c = -1

    for(let i = 0;i<n;i++){
        if(arr[i]<k){
            f = Math.max(f,arr[i]);
        }

        if(arr[i]>k){
            if(c===-1 || arr[i]<c){
                c = arr[i];
            }
        }
    }
    return [f,c];
}

console.log(floorTheCeil([5, 6, 8, 9, 6, 5, 5, 6],7))