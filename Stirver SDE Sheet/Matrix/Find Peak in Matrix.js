function findsMaxRow(mat,col){
    let maxRow = 0;
    for(let i = 1;i<mat.length;i++){
        if(mat[i][col] > mat[maxRow][col]){
            maxRow = i;
        }
    }
    return maxRow;
}

function findPeak(mat){
    const row = mat.length;
    const col = mat[0].length;

    let low = 0;
    let high = col-1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        let peakRow = findsMaxRow(mat,mid);

        let peak = mat[peakRow][mid];


        let leftNbr = (mid>0) ? mat[peakRow][mid-1] : -1;
        let rightNbr = (mid<col-1) ? mat[peakRow][mid+1]:-1;


        if(peak>leftNbr && peak >rightNbr){
            return [peakRow,mid];
        }

        if(peak < leftNbr){
            high = mid-1;
        }else{
            low=mid+1;
        }
    }
    return [-1,-1]
}

console.log(findPeak([[10,20,15],[21,30,14],[7,16,32]]));