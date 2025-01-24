function findRepatingMissing(arr){
    const n = arr.length;
    let result =[];
    let map = {};

    for(let val of arr){
        map[val] = (map[val] || 0) + 1;
    }

    console.log(map);

    for(let i=1;i<=n;i++){
        if(map[i]>1){
            result[0] = i;
        }else if(!map[i]){
            result[1] = i;
        }
    }
    return result;
}

console.log(findRepatingMissing([2,2]))