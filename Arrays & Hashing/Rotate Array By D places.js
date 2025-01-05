function rotateByd(arr,d){
    let len = arr.length;

    let index = d%len;

    if(index === 0) return arr;

    let temp =[];

    for(let i = 0;i<index;i++){
        temp[i] = arr[i];
    }

    for(let i = index;i<len;i++){
        arr[i-index] = arr[i];
    }

    for(let i=0;i<index;i++){
        arr[len-index+i] = temp[i];
    }

    return arr;
}

console.log(rotateByd([1,0],3));