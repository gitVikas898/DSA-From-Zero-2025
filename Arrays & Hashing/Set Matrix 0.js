function setMatrixZero(arr){
    const  n = arr.length;
    const  m = arr[0].length;

    let row = new Array(n).fill(0);
    let col = new Array(m).fill(0);

    for(let i =0;i<n;i++){
        for(let j =0;j<m;j++){
            if(arr[i][j] === 0){
                row[i] = 1;
                col[j] = 1;
            }
        }
    }

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(row[i] || col[j]){
                arr[i][j] = 0;
            }
        }
    }

    return arr;
    
}

console.log(setMatrixZero([[1,1,1],[1,0,1],[1,1,1]]))
console.log(setMatrixZero([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))