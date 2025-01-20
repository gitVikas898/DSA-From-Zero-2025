function findMajor(arr){
    const n = arr.length;
    let result = [];
    const k = n/3;

    if(n===1){
        result.push(arr[0])
        return result;
    }

    let map  = {};

    for(let val of arr){
        map[val] = (map[val] || 0) + 1;
    }

    for(let key in map){
        if(map[key] > k){
            result.push(parseInt(key));
        }
    }

    return result;
    
}

console.log(findMajor([3,2,3]))
console.log(findMajor([1,2]))