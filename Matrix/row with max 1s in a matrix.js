function findRowWithMax(arr){
    let index = -1;
    const n = arr.length;
    const m = arr[0].length;
    let maxSum = 0;

    for(let i =0;i<n;i++){
        let sum = 0;
        for(let j=0;j<n;j++){
            sum +=arr[i][j];
        }
        if(sum>maxSum){
            maxSum = sum;
            index = i;
        }
    }
    return index;
}

console.log(findRowWithMax([[0,0,1,1,1],[1,1,1,1],[0,0,0,1,1]]));


// effiecient Solution using Binary Search;


function findRowWithMax2(arr){
    const n = arr.length;
    const m = arr[0].length;
    let index = -1;
    let maxSum = 0;
    let firstIndex = -1;
    for(let i = 0;i<n;i++){
        let low = 0;
        let high = m-1;
        while(low<=high){

            let mid = Math.floor((low+high)/2);

            if(arr[i][mid] === 1){
                firstIndex = mid;
                high = mid-1;
            }else{
                low = mid+1;
            }
            
        }

        let sum = firstIndex!== -1 ? n-firstIndex : 0;
        
        if(sum>maxSum){
            maxSum = sum;
            index = i;
        }
    }
    return index;
}

console.log(findRowWithMax2([[0,0,1,1,1],[1,1,1,1],[0,0,0,1,1]]));