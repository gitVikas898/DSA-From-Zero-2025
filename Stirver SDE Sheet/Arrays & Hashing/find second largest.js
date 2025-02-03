function findSecondLargest(arr){

    const length = arr.length;
    let currentMax = arr[0];
    let max = currentMax;
    let secondLargest = -1;

    if(length === 1){
        max = arr[0]
        return secondLargest;
    }

    for(let i = 1;i<length;i++){
        if(arr[i]>arr[i-1]){
            currentMax = arr[i];
            max = Math.max(currentMax,max);
        }
    }
   

    for(let i=0;i<length;i++){
        if(arr[i] > secondLargest && arr[i]<max){
            secondLargest =arr[i];
        }
    }

    return secondLargest;


}

console.log("Test #1",findSecondLargest([12, 35, 1, 10, 34, 1]));

console.log("Test #2",findSecondLargest([10, 5, 10]));

console.log("Test #3" ,findSecondLargest([10, 10, 10]));

console.log("Test #4" ,findSecondLargest([10,5]));