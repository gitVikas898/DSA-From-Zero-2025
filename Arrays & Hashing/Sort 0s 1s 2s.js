function sort(arr){
    let zero = 0,ones = 0, two=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i] === 0){
            zero++;
        }
        else if(arr[i] === 1){
            ones++;
        }
        else if(arr[i] === 2){
            two++;
        }
    }

    for(let i = 0;i<zero;i++){
        arr[i] = 0;
    }

    for(let i = zero+1;i<ones;i++){
        arr[i] = 1;
    }

    for(let i = 0;i<zero;i++){
        arr[i] = 0;
    }
}