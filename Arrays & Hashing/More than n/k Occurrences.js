function countOccurence(arr, k){
    const n = arr.length;
    let map = {}
    let count = 0;
    for(let val of arr){
        map[val] = (map[val] || 0) + 1;
    }

    for(let key in map){
        if(map[key] > n/k){
            count++;
        }
    }
    return count;
}

console.log(countOccurence([3, 1, 2, 2, 1, 2, 3, 3],4))
console.log(countOccurence([2, 3, 3, 2],3))
console.log(countOccurence([1, 4, 7, 7],2))