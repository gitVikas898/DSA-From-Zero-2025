function checkSorted(arr){
    let length = arr.length;

    for(let i = 0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            return false;
        }
    }
    return true;
}


console.log("Test #1",checkSorted([90 ,80, 100, 70 ,40 ,30]))
console.log("Test #1",checkSorted([10, 20, 30, 40, 50]))
console.log("Test #1",checkSorted(10,10));