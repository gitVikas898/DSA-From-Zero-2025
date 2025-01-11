function findUnion(arr,brr){
    let map = {};

    for(let val of arr){
        map[val] = (map[val] || 0) + 1;
    }

    console.log(map);


    for(let val of brr){
        if(!map[val]){
            map[val] = (map[val] || 0)+1;
        }
    }
    console.log(map);
    let res = [];

    for(let key in map){
        res.push(parseInt(key));
    }

    return res.sort((a,b)=>a-b);
   
}

console.log(findUnion([1,2,3,4,5],[1,2,3,6,7]));

console.log(findUnion([1, 1, 1, 1, 1],[2, 2, 2, 2, 2]));

console.log(findUnion([2, 2, 3, 4, 5],[1, 1, 2, 3, 4]));


console.log(findUnion([-7,8],[-8,-3,8]));