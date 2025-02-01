function searchMatrix(matrix,target){
    const n = matrix.length;
    const m = matrix[0].length;

    for(let i = 0;i<n;i++){
        let low = 0;
        let high = m-1;
        while(low<=high){
            let mid = Math.floor((low+high)/2);
            if(matrix[i][mid] === target){
                return true;
            }else if(matrix[i][mid]>target){
                high = mid-1;
            }else{
                low = mid+1;
            }
        }
    }
    return false;
}
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],13))