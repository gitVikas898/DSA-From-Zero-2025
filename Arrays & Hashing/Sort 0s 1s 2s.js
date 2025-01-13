function sort(arr){
    const n = arr.length;
    let zero = 0,ones = 0, two=0;

    for(let i=0;i<n;i++){
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

    for(i=0;i<zero;i++){
        arr[i] = 0;
    }

    for(i=zero;i<zero+ones;i++){
        arr[i] = 1;
    }

    for(i=zero+ones;i<n;i++){
        arr[i] = 2;
    }

    return arr;
}

console.log(sort([2,0,2,1,1,0]));
console.log(sort([2,0,1]))