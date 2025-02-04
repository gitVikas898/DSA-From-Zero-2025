function findMedian(mat){
    const n = mat.length;
    const m = mat[0].length;
    let list = [];
    let k=0;
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            list.push(mat[i][j]);
        }
    }
    
    const l = 0;
    const h = list.length-1;

    list.sort((a,b)=>a-b);
    console.log(list);

    return list[Math.floor((l+h)/2)];
}

console.log(findMedian([[1, 3, 5], [2, 6, 9], [3, 6, 9]]))