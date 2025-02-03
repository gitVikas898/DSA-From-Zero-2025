function reArrange(arr){
    let n = arr.length;

    let positives = [];

    let negative = [];

    for(let i=0;i<n;i++){
        if(arr[i]<0){
            negative.push(arr[i]);
        }else{
            positives.push(arr[i]);
        }
    }

    let result = [];

    for(let i=0;i<positives.length;i++){
       result[i*2] = positives[i];
    }

    for(let i=0;i<negative.length;i++){
        result[i*2+1] = negative[i];
    }

  return result;
}

reArrange([3,1,-2,-5,2,-4]);
reArrange([-1,1]);
reArrange([3,1,-2,-5,2,-4]);