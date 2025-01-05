function rotateByd(arr,d){

    
    let temp =[];
    for(let i = 0;i<d;i++){
        temp[i] = arr[i];
    }

    for(let i = d;i<arr.length;i++){
        arr[i-d] = arr[i];
    }

    for(let i=0;i<d;i++){
        arr[arr.length-d+i] = temp[i];
    }

    return arr;
}

console.log(rotateByd([1,0],2));